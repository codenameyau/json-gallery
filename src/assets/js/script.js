/* global $ */
'use strict';

$(function() {
  var jsonSource = 'assets/data/portfolio-gallery.json';

  // Initialise json gallery
  jsonGallery(jsonSource);

  // Pretty print json
  outputJson(jsonSource, '#json-output');
});


function outputJson(source, selector) {
  $.getJSON(source, function(data) {
    var jsonOutput = JSON.stringify(data, undefined, 2);
    $(selector).html(jsonOutput);
  });
}
