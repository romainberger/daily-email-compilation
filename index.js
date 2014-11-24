'use strict';

var jsdom = require('jsdom-daily')
  , juice = require('juice-daily')

function dom(html) {
  return jsdom.jsdom(html, jsdom.level(1, 'core'), {forceRaw: true, ignoreChars: ['nbsp']})
}

function compile(html, css) {
  var document = dom(html)
  juice.inlineDocument(document, css)
  var inner = document.innerHTML
  try {
    document.parentWindow.close()
  }
  catch (cleanupErr) {}

  return inner
}

module.exports = compile
