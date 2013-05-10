/*!
 * William DURAND <william.durand1@gmail.com>
 * MIT Licensed
 */
(function ($, undefined) {
    var Anchorify;

    Anchorify = function (options) {
        var id, anchor, text, cssClass;

        text     = options.text || '¶';
        cssClass = options.cssClass || 'anchor-link';

        if (undefined !== options.$el.attr('id')) {
            id = options.$el.attr('id');
        } else {
            id = options.$el.text()
                .trim()
                .replace(/[ ;,.'?!_]/g, '-')
                .replace(/[-]+/g, '-')
                .replace(/-$/, '')
                .toLowerCase();

            options.$el.attr('id', id);
        }

        if (undefined !== Anchorify.generatedIds[id]) {
            var oldId = id;

            id = id + '-' + Anchorify.generatedIds[id];
            options.$el.attr('id', id);

            Anchorify.generatedIds[oldId]++;
        } else {
            Anchorify.generatedIds[id] = 1;
        }

        anchor = [
            '<a href="#', id, '" class="', cssClass, '">',
            text,
            '</a>'
        ].join('');

        options.$el.append(anchor);
    };

    $.fn.anchorify = function (options) {
        options = options || {};

        Anchorify.generatedIds = [];

        this.each(function () {
            var extendedOptions = $.extend({}, options, { $el: $(this) });

            new Anchorify(extendedOptions);
        });

        return this;
    };
})(jQuery, undefined);
