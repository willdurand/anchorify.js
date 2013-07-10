/*!
 * William DURAND <william.durand1@gmail.com>
 * MIT Licensed
 */
(function (document, $) {
    "use strict";

    var anchorify = (function() {
        var _specialCharsRegex = /[ ;,.'?!_]/g;

        function generateId(text) {
            return text
                .trim()
                .replace(_specialCharsRegex, '-')
                .replace(/[-]+/g, '-')
                .replace(/-$/, '')
                .toLowerCase();
        }

        function uniqId(id) {
            var inc = 1,
                originalId = id;

            while (document.getElementById(id)) {
                id = originalId + '-' + inc++;
            }

            return id;
        }

        function getText(el) {
            var node;
            for (var i = 0; i < el.childNodes.length; i++) {
                node = el.childNodes[i];
                if (node.nodeType === Node.TEXT_NODE) {
                    return node.nodeValue;
                }
            }
        }

        return function anchorify(els, options) {
            var text = options.text || '&para;',
                cssClass = options.cssClass || 'anchor-link',
                skipExisting = options.skipExisting;

            var el, id, anchor;

            for (var i = 0; i < els.length; i++) {
                el = els[i];
                if (el.id && skipExisting) {
                    continue;
                }
                el.id = el.id || uniqId(generateId(getText(el)));

                anchor = document.createElement('a');
                anchor.className = cssClass;
                anchor.href = '#' + el.id;
                anchor.innerHTML = text;

                if (options.position == 'prepend') {
                    el.insertBefore(anchor, el.firstChild);
                } else {
                    el.appendChild(anchor);
                }
            }
        };
    })();

    if (typeof $ !== 'undefined') {
        $.fn.anchorify = function (options) {
            anchorify($(this).get(), options || {});

            return this;
        };
    } else {
        window.anchorify = function(options) {
            options = options || {};
            var els = document.querySelectorAll(options.sel || 'h1, h2, h3, h4, h5');

            return anchorify(els, options);
        };
    }
})(document, jQuery);
