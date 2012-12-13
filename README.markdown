# sightmap

Generate and cache sitemaps

# example

``` js
var sightmap = require('sightmap');

sightmap(['http://sightmap.example.com/1', 'http://sightmap.example.com/2']);

sightmap(function(xml) {
  console.log(xml);
});
```

# define urls as strings or objects

``` js
sightmap([
  'http://sightmap.example.com/1',
  'http://sightmap.example.com/2'
]);
```
***

``` js
sightmap([
  {loc: 'http://sightmap.example.com/1', priority: 0.6},
  {loc: 'http://sightmap.example.com/2', priority: 0.4}
]);
```

# install

With [npm](https://npmjs.org) do:

```
npm install sightmap
```

# license

MIT