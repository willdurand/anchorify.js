module('Anchorify');

test('creates an id attribute', function () {
    var $el;

    $el = $('#qunit-fixture h2[data-id=1]');
    $el.anchorify();

    equal($el.attr('id'), 'hello-world');
});

test('creates an anchor', function () {
    equal($('.anchor-link').size(), 0);

    $el = $('#qunit-fixture h2[data-id=1]');
    $el.anchorify();

    equal($('.anchor-link').size(), 1);
    equal($el.find('.anchor-link').attr('href'), '#hello-world');
    equal($el.find('.anchor-link').text(), '¶');
});

test('generates clean ids', function () {
    var $el;

    $el = $('#qunit-fixture h2[data-id=2]');
    $el.anchorify();
    equal($el.find('.anchor-link').attr('href'), '#hello');

    $el = $('#qunit-fixture h2[data-id=3]');
    $el.anchorify();
    equal($el.find('.anchor-link').attr('href'), '#post-it');
});
