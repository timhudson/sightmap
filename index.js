var cache = {};

module.exports = function(urls, callback) {
  if (typeof urls === 'function') callback = urls;

  // Cache urls if provided
  if (Array.isArray(urls)) {
    cache.urls = urls;
    cache.xml = generateXML(urls);
  }

  // Synchronously return XML
  if (urls === undefined) return cache.xml;

  // Asyncronously return XML
  if (typeof callback === 'function') callback(cache.xml);
};

function generateXML(urls) {
  var XML = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  urls.forEach(function(item) {
    if (toString.call(item) == '[object String]') item = {loc: item};

    var _XML = '<url><loc>'+item.loc+'</loc>';

    if (item.lastmod) _XML += '<lastmod>'+item.lastmod+'</lastmod>';
    if (item.changefreq) _XML += '<changefreq>'+item.changefreq+'</changefreq>';
    if (item.priority) _XML += '<priority>'+item.priority+'</priority>';

    _XML += '</url>';

    XML += _XML;
  });

  XML += '</urlset>';

  return XML;
}