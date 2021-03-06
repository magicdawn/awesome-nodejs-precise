'use strict';

const inspect = require('util').inspect;
const fs = require('fs-extra');
const co = require('co');
const request = require('superagent');
const cheerio = require('cheerio');
const _ = require('lodash');

const get$ = co.wrap(function*() {
  const res = yield request.get('https://github.com/sindresorhus/awesome-nodejs/');
  const html = res.text;
  return cheerio.load(html);
});

const getList = co.wrap(function*() {
  const $ = yield get$();
  const $readme = $('#readme');
  const $packageH2 = $readme.find('h2').filter(
    (_, h) => $(h).text().toLowerCase() === 'packages'
  );
  const $h3s = $packageH2.nextAll('h3');

  const getLiContent = li => {
    const $a = $(li).find('a').first().remove();
    const name = $a.text();
    const url = $a.attr('href');

    let description = $(li).html();
    description = _.trim(description, [' -']);

    return {
      name,
      url,
      description
    };
  };

  const list = $h3s.map((__, h3) => {
    const $ul = $(h3).next('ul');
    const len = $ul.find('ul').length;

    if (!len) {
      return {
        category: _.trim($(h3).text()),
        contents: $ul.children().map((__, li) => getLiContent(li)).get()
      };
    } else {
      return $ul.children().map((__, li) => {
        const $subUl = $(li).find('ul').remove();
        const subCategory = _.trim($(h3).text() + ' ' + $(li).text());
        return {
          category: subCategory,
          contents: $subUl.children().map((__, li) => getLiContent(li)).get()
        };
      }).get();
    }

  }).get();

  return _.flatten(list);
});

const main = co.wrap(function*() {
  const list = yield getList();
  console.log(inspect(list, {
    depth: null
  }));

  const md = generateMd(list);
  // console.log(md);
  fs.writeFileSync(__dirname + '/../README.md', md);
});

const template = `
# awesome-nodejs-precise
> list taken from [awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs/), with star shown

## TOC

{{toc}}

## Packages

{{md}}

## LICENSE

### the \`awesome-nodejs\` project LICENSE

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
To the extent possible under law, [Sindre Sorhus](http://sindresorhus.com) has waived all copyright and related or neighboring rights to this work.

### the star generate code LICENSE
the MIT LICENSE
`;

const generateMd = list => {
  let md = [];
  let toc = [];
  for (let i of list) {
    toc.push(`- [${ i.category }](#${ _.kebabCase(i.category) })`);
    md.push(`### ${ i.category }`);
    md.push('|name|star|description|');
    md.push('|----|----|-----------|');


    if (i.contents && i.contents.length) {
      for (let j of i.contents) {

        let star;
        if(_.startsWith(j.url, 'https://github.com/')){
          const repo = j.url.substring('https://github.com/'.length);
          star = `[![GitHub stars](https://img.shields.io/github/stars/${ repo }\
            .svg?style=social&label=Star&maxAge=2592000?style=flat-square)]()`;
        }
        md.push(`| [${ j.name || '<no name>' }](${ j.url }) | ${ star || 'not available now' } | ${ j.description } |`);
      }
    }

    md.push('\n');
  }

  md = md.join('\n');
  toc = toc.join('\n');
  const ret = template.replace('{{toc}}', toc).replace('{{md}}', md);
  return ret;
};

main().catch(e => console.error(e.stack || e));