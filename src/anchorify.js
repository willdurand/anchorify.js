/*!
 * William DURAND <william.durand1@gmail.com>
 * MIT Licensed
 */
(function ($, undefined) {
    "use strict";

    var Anchorify = function (options) {
        var text = options.text || '¶',
            cssClass = options.cssClass || 'anchor-link',
            id = uniqId(options.$el.attr('id') || generateId(options.$el));

        options.$el.attr('id', id)[options.position || 'append']([
            '<a href="#', id, '" class="', cssClass, '">',
            text,
            '</a>'
        ].join(''));
    };

    var generateId = function ($el) {
        return $el.text()
            .trim()
            .replace(/[ ;,.'?!_]/g, '-')
            .replace(/[-]+/g, '-')
            .replace(/-$/, '')
            .toLowerCase();
    };

    var uniqId = function (id) {
        if ('undefined' !== typeof Anchorify.generatedIds[id]) {
            return id = id + '-' + Anchorify.generatedIds[id]++;
        }

        Anchorify.generatedIds[id] = 1;
        return id;
    };

    $.fn.anchorify = function (options) {
        Anchorify.generatedIds = [];

        this.each(function () {
            new Anchorify($.extend({}, options || {}, { $el: $(this) }));
        });

        return this;
    };
})(jQuery, undefined);
