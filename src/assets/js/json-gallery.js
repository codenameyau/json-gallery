/*!
 * json-gallery v0.0.1
 * MIT License (c) 2014 Jorge Yau
 * codenameyau.github.io
 */

/* global $ */
'use strict';

// Initializes gallery, include in main script
function jsonGallery(jsonSource, thumbnailSize, numCols, colOffset) {

  // Initialize modal popup
  initImageModal();

  // Default bootstrap columns
  thumbnailSize = thumbnailSize || 5;
  numCols       = numCols       || 2;
  colOffset     = colOffset     || 1;

  var newThumbnail = {
    newRow : '<div class="row"><div class="col-md-'+thumbnailSize+' col-md-offset-'+colOffset+'">',
    newCol : '<div class="col-md-'+thumbnailSize+'">'
  };

  // Add items to gallery
  $.getJSON(jsonSource, function(data) {
    var count = data.gallery.length;
    var items = [];

    // Parse JSON to add items to gallery gallery
    $.each(data.gallery, function(index, val) {
      var newImage = '';

      // Add a new row
      if (index%numCols === 0)
        newImage += newThumbnail.newRow;
      else
        newImage += newThumbnail.newCol;

      // Add new gallery item
      newImage += '<div class="gallery-item"><img class="img-thumbnail img-responsive img-json-thumnail" src="' + val.images[0].image + '"><div class="json-thumbnail-title" data-images=\'' + escapeQuotes(JSON.stringify(val.images, undefined, 2)) +'\' data-title="'+ val.title +'" data-toggle="modal" data-target="#json-gallery-modal"><a class="json-title-link" href="'+ val.link +'" target="_blank">'+ val.title + '</a></div></div></div>';

      // Close row
      if (index%count == numCols-1)
        newImage += '</div>';
      items.push(newImage);
    });

    // Add items to #json-gallery
    $(items.join("\n")).appendTo("#json-gallery");
  });
}

// Create image modal popup
function initImageModal() {
  $('<div class="modal fade" id="json-gallery-modal" tabindex="-1" role="dialog" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-body" id="json-gallery-body"> <div id="json-gallery-carousel" class="carousel slide"> <ol class="carousel-indicators" id="json-gallery-indicators"> </ol> <div class="carousel-inner" id="json-gallery-carousel-inner"> </div> <div class="carousel-footer-bg"> </div> <a class="left carousel-control" href="#json-gallery-carousel" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"> </span> </a> <a class="right carousel-control" href="#json-gallery-carousel" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"> </span> </a> </div> </div> </div> </div></div>').appendTo('#json-gallery');
}

// Click on image thumbnail, update modal information
$(document.body).on('click', '.json-thumbnail-title', function() {
  var galleryTarget = $(this);
  var galleryString = galleryTarget.attr('data-images');
  var galleryImages = JSON.parse(galleryString);
  var galleryIndicators = $("#json-gallery-indicators");
  var galleryBody = $("#json-gallery-carousel-inner");

  // Clear modal contents
  galleryIndicators.html("");
  galleryBody.html("");

  // Add each carousel content
  $.each(galleryImages, function(index, val) {
    if (index === 0) {
      galleryIndicators.append(
        '<li class="active" data-target="#json-gallery-modal" data-slide-to="'+index+'"></li>');
      galleryBody.append('<div class="item active"><img src="'+val.image+'" alt="'+val.caption+'"> <div class="carousel-caption"><h4 class="json-carousel-caption">'+val.caption+'</h4></div></div>');
    }

    else {
      galleryIndicators.append(
        '<li data-target="#json-gallery-modal" data-slide-to="'+index+'"></li>');
      galleryBody.append('<div class="item"><img src="'+val.image+'" alt="'+val.caption+'"> <div class="carousel-caption"> <h4 class="json-carousel-caption">'+val.caption+'</h4> </div> </div>');
    }
  });

  // Hide options
  $("#json-gallery-indicators, .carousel-footer-bg, .json-carousel-caption").hide();
});


// Fade in out caption
$(document.body).on('mouseenter', '#json-gallery-body', function() {
  $("#json-gallery-indicators, .carousel-footer-bg, .json-carousel-caption").fadeIn(400);
});

$(document.body).on('mouseleave', '#json-gallery-body', function() {
  $("#json-gallery-indicators, .carousel-footer-bg, .json-carousel-caption").fadeOut(400);
});


// Escapes single quotes from JSON
function escapeQuotes(input) {
  return input.replace(/'/g, "&#39;");
}
