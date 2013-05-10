Anchorify.js
============

[![Build Status](https://travis-ci.org/willdurand/anchorify.js.png?branch=master)](https://travis-ci.org/willdurand/anchorify.js)

Anchorify.js is a dead simple jQuery plugin for automatically creating anchored
headings in your HTML documents.


Usage
-----

It could not be easier:

``` javascript
$('h2 h3').anchorify();
```

Anchorify.js generates clean anchor names:

``` html
<h2>Hello, World!</h2>
<!-- would become: -->

<h2 id="hello-world">Hello, World! <a href="#hello-world" class="anchor-link">¶</a></h2>
```


License
-------

Anchorify.js is released under the MIT License. See the bundled LICENSE file for
details.
