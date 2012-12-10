var test = require('tap').test;
var sightmap = require('../index.js');

var xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>http://sightmap.example.com/1</loc></url><url><loc>http://sightmap.example.com/2</loc></url></urlset>';

test('generate from array of strings', function(t) {
  sightmap(['http://sightmap.example.com/1', 'http://sightmap.example.com/2']);

  t.equal(sightmap(), xml);
  t.end();
});

test('generate from array of objects', function(t) {
  sightmap([
    {loc: 'http://sightmap.example.com/1'},
    {loc: 'http://sightmap.example.com/2'}
  ]);

  t.equal(sightmap(), xml);
  t.end();
});