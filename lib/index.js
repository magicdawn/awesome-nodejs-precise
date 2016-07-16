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
        category: $(h3).text(),
        contents: $ul.children().map((__, li) => getLiContent(li)).get()
      };
    } else {
      return $ul.children().map((__, li) => {
        const $subUl = $(li).find('ul').remove();
        const subCategory = $(h3).text() + ' ' + $(li).text();
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

const generateMd = list => {
  const result = [];
  for (let i of list) {
    result.push(`## ${ i.category }`);
    result.push('|name|star|description|');
    result.push('|----|----|-----------|');

    if (i.contents && i.contents.length) {
      for (let j of i.contents) {
        result.push(`| [${ j.name || '<no name>' }](${ j.url }) | not available now | ${ j.description } |`);
      }
    }

    result.push('\n');
  }

  return result.join('\n');
};

main().catch(e => console.error(e.stack || e));