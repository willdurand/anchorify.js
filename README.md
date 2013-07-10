Anchorify.js
============

[![Build Status](https://travis-ci.org/willdurand/anchorify.js.png?branch=master)](https://travis-ci.org/willdurand/anchorify.js)

Anchorify.js is a dead simple JavaScript library for automatically creating
anchored headings in your HTML documents. It guarantees uniqueness of the anchor
names, and is able to reuse existing ids.

It can be used either as a jQuery plugin, or as a standalone library without any
dependencies (except `querySelectorAll()`).

Usage
-----

It could not be easier as Anchorify.js provides a jQuery plugin out of the box:

``` javascript
$('h2 h3').anchorify();
```

Anchorify.js generates clean anchor names:

``` html
<h2>Hello, World!</h2>
<!-- would become: -->

<h2 id="hello-world">Hello, World!<a href="#hello-world" class="anchor-link">¶</a></h2>
```

By default, it uses the `¶` sign for the links' text, and adds an `anchor-link`
CSS class on each link.

However, you can configure your own text, CSS class and anchor position using
the `text`, `cssClass` and `position` options:

``` javascript
$('h2').anchorify({ text: 'Hey', cssClass: 'anchor', position: 'prepend' });
```

``` html
<h2 id="hello-world"><a href="#hello-world" class="anchor">Hey</a>Hello, World!</h2>
```

Running the Tests
-----------------

Open the `tests/index.html` file in your browser or use
[PhantomJS](http://phantomjs.org/):

    phantomjs tests/run-qunit.js file:///.../anchorify.js/tests/index.html


License
-------

Anchorify.js is released under the MIT License. See the bundled LICENSE file for
details.
