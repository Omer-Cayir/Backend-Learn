const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const routes = fs.readdirSync(__dirname);

for (let route of routes) {
  if (
    route.endsWith('.js') &&
    route !== 'index.js'
  ) {
    const imported = require(path.join(__dirname, route));
    // Sadece bir router ise ekle
    if (
      typeof imported === 'function' ||
      (imported && imported.stack)
    ) {
      router.use('/' + route.replace('.js', ''), imported);
    }
  }
}


module.exports = router;
