jCurvy
==========

jCurvy is a small and easy to use jQuery plugin that allows you to position elements along a Bézier curve. 
Developers can either position elements along the default curve, or play with our [curve creation tool](http://jcurvy.com/) and generate 
the code for more complex curves. 


There are three versions of the jQuery plugin.

  1. jCurvy.js - use for debugging
  2. jCurvy.min.js - use for production
  3. jCurvy.design.js - use temporarily if you want to play with a curve and generate an equation on your site.


Basic usage
------------
Simply add the plugin to your page and do the following:

    $('.mySelector').curve();
    
This will take all elements that have the class .mySelector and place them along the default curve.

Generating a custom curve
-------------------------
The easiest way to do this is to go to http://jcurvy.com/ and play with the curve creation tool at the bottom of the page.
By dragging the various points around you can automatically generate a call to jCurvy that will fit all elements along your custom curve.  The example below will place elements along a nice wave:

    $(".mySelector").curve({"x1":344,"y1":316,"x2":678,"y2":-221})
    
Defining the curve on your own website
--------------------------------------
Sometimes you will have a very specific curve that you need to follow on your own website.  In order to do this you must temporarily use jCurvy.design.js 

I have created a working example with detailed instructions that can be found [here](jcurvy.com/design.html).
