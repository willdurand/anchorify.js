/*!
 * William DURAND <william.durand1@gmail.com>
 * MIT Licensed
 */
(function ($) {
    "use strict";

    var Anchorify = (function () {
        var _generatedIds = [];

        function generateId($el) {
            return $el.text()
                .trim()
                .replace(/[ ;,.'?!_]/g, '-')
                .replace(/[-]+/g, '-')
                .replace(/-$/, '')
                .toLowerCase();
        }

        function uniqId(id) {
            if ('undefined' !== typeof _generatedIds[id]) {
                id = id + '-' + _generatedIds[id]++;
            } else {
                _generatedIds[id] = 1;
            }

            return id;
        }

        return {
            init: function () {
                _generatedIds = [];
            },

            anchorify: function (options) {
                var text     = options.text || '¶',
                    cssClass = options.cssClass || 'anchor-link',
                    id       = uniqId(options.$el.attr('id') || generateId(options.$el));

                options.$el.attr('id', id)[options.position || 'append']([
                    '<a href="#', id, '" class="', cssClass, '">',
                    text,
                    '</a>'
                ].join(''));
            }
        };
    })();

    $.fn.anchorify = function (options) {
        Anchorify.init();

        this.each(function () {
            Anchorify.anchorify($.extend({}, options || {}, { $el: $(this) }));
        });

        return this;
    };
})(jQuery);
