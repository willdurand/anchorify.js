/*!
 * William DURAND <william.durand1@gmail.com>
 * MIT Licensed
 */
(function ($) {
    var Anchorify;

    Anchorify = function (options) {
        var id,
            anchor,
            text,
            cssClass;

        text = options.text || '¶';
        cssClass = options.cssClass || 'anchor-link';
        id = options.$el.text()
                .trim()
                .replace(/[ ;,.'?!_]/g, '-')
                .replace(/[-]+/g, '-')
                .replace(/-$/, '')
                .toLowerCase();


        anchor = [
            '<a href="#', id, '" class="', cssClass, '">',
            text,
            '</a>'
        ].join('');

        options.$el.attr('id', id);
        options.$el.append(anchor);

    };

    $.fn.anchorify = function (options) {
        options = options || {};

        this.each(function () {
            var extendedOptions = $.extend({}, options, { $el: $(this) });

            new Anchorify(extendedOptions);
        });

        return this;
    };
})(jQuery);
