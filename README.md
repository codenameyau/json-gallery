json-gallery
======================

##Description
JSON Gallery lets you easily set up and manage a responsive image gallery with JSON.

####Live Demo
- [JSON Gallery is used for my portfolio](https://codenameyau.github.io/)
- An basic demo is included in the `src/` directory


##Installation and Setup

###Required Dependencies
- jQuery 1.10+ (JS)
- bootstrap 3.0.3+ (CSS + JS)

####Install with Bower
Run: `bower install json-gallery`

####Manual Installation from build
Move the files in `build` into your project's `assets/` folder.


###Setup
* In your html `head`, include the following:

    ```html
    <link href="assets/css/json-gallery.min.css" rel="stylesheet">
    ```

* In your JavaScript source, include:

    ```html
    <script src="assets/js/json-gallery.min.js"></script>
    ```

* Insert the following code in your html to create a gallery:

    ```html
    <div class="container">
      <div id="json-gallery"></div>
    </div>
    ```

* Create a JSON file for your gallery, ex:

    ```
    $ touch assets/data/portfolio-gallery.json
    ```

* Edit the JSON file, following this format:

    ```json
    {
      "gallery" : [

        {
          "title" : "Spring 2013",
          "link" : "#sample-portfolio",
          "images" : [
            {
              "image" : "assets/img/spring-2013/spring-13-1.jpg",
              "caption" : "\"Caption with double quotes\""
            },
            {
              "image" : "assets/img/spring-2013/spring-13-2.jpg",
              "caption" : "'Caption' with single quotes"
            },
            {
              "image" : "assets/img/spring-2013/spring-13-3.jpg",
              "caption" : "Both 'single' and \"double\" quotes"
            }
          ]
        },

        ...

        ]
    }
    ```

* Lastly in your main JS script file, initialize the gallery:

    ```javascript
    $(function() {
        // Args: ('filename', thumbnailSize, numCols, colOffset)
        jsonGallery('assets/data/portfolio-gallery.json', 5, 2, 1);
    });
    ```

##FAQs
How do I use single and double quotes in JSON?

Check out Installation step 7. It has examples of both cases.


##Future Tasks
* Add initialization parameters to change height and width of thumbnails
