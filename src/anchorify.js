(function ($) {
    var Anchorify;

    Anchorify = function (options) {
        var _id,
            _anchor;

        _id = options.$el.text()
                .trim()
                .replace(/[ ;,.'?!_]/g, '-')
                .replace(/[-]+/g, '-')
                .replace(/-$/, '')
                .toLowerCase();

        _anchor = '<a href="#' + _id + '" class="anchor-link">¶</a>';

        options.$el.attr('id', _id);
        options.$el.append(_anchor);

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
