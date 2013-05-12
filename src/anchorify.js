/*!
 * William DURAND <william.durand1@gmail.com>
 * MIT Licensed
 */
(function ($) {
    "use strict";

    var Anchorify = (function () {
        var _specialCharsRegex = /[ ;,.'?!_]/g;

        function generateId($el) {
            return $el.text()
                .trim()
                .replace(_specialCharsRegex, '-')
                .replace(/[-]+/g, '-')
                .replace(/-$/, '')
                .toLowerCase();
        }

        function uniqId(id) {
            var inc = 1,
                originalId = id;

            while (0 !== $('#' + id).length) {
                id = originalId + '-' + inc++;
            }

            return id;
        }

        return {
            anchorify: function (options) {
                var text     = options.text || '¶',
                    cssClass = options.cssClass || 'anchor-link',
                    id       = options.$el.attr('id') || uniqId(generateId(options.$el));

                options.$el.attr('id', id)[options.position || 'append']([
                    '<a href="#', id, '" class="', cssClass, '">',
                    text,
                    '</a>'
                ].join(''));
            }
        };
    })();

    $.fn.anchorify = function (options) {
        this.each(function () {
            Anchorify.anchorify($.extend({}, options || {}, { $el: $(this) }));
        });

        return this;
    };
})(jQuery);
