var sightmap = require('../index.js');

sightmap(['http://sightmap.example.com/1', 'http://sightmap.example.com/2']);

sightmap(function(xml) {
  console.log(xml);
});