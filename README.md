json-gallery
======================

##Description
JSON Gallery lets you easily set up and manage a responsive image gallery with JSON.
It's great for photographs, graphic designs, and web portfolios.

####Live Demo
- [JSON Gallery is used in my portfolio](https://codenameyau.github.io/#portfolio)


##Required Dependencies
- jQuery 1.10+ (JS)
- bootstrap 3.0.3+ (CSS + JS)


##Installation and Setup
1. Download or clone source and `cd dist`

2. Move the files in `dist` into your project's `/assets` folder.

3. In your html `head`, include the following:

    ```html
    <link href="assets/css/json-gallery.css" rel="stylesheet">
    ```

4. In your JavaScript source, include:

    ```html
    <script src="assets/js/json-gallery.js"></script>
    ```

5. Insert the following code in your html to create a gallery:

    ```html
    <div class="container">
      <div id="json-gallery"></div>
    </div>
    ```

6. Create a JSON file for your gallery, ex:

    ```
    $ touch assets/data/portfolio-gallery.json
    ```

7. Edit the JSON file, following this format:

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

8. Lastly in your JS main script, initialize the gallery with your JSON file:

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
* Add parameters to change height and width of thumbnails
