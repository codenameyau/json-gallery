$(function() {
    var jsonSource = 'assets/data/portfolio-gallery.json';

    // jsonGallery('source', thumbnailSize, numCols, colOffset)
    jsonGallery(jsonSource, 4, 2, 2);

    // Pretty print json
    outputJson(jsonSource, '#json-output');
});


function outputJson(source, selector) {
    $.getJSON(source, function(data) {
        var jsonOutput = JSON.stringify(data, undefined, 2);
        $(selector).html(jsonOutput);
    });
}
