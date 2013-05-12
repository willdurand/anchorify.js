module('Anchorify');

test('creates an id attribute', function () {
    var $el;

    $el = $('#qunit-fixture h2[data-id=1]');
    $el.anchorify();

    equal($el.attr('id'), 'hello-world');
});

test('creates an anchor', function () {
    var $el;

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

test('allows custom CSS classes', function () {
    var $el;

    $el = $('#qunit-fixture h2[data-id=1]');
    $el.anchorify({ cssClass: 'my-css-class' });

    ok($el.find('.my-css-class'));
    equal($el.find('.my-css-class').attr('href'), '#hello-world');
});

test('allows custom text in the anchor link', function () {
    var $el;

    $el = $('#qunit-fixture h2[data-id=1]');
    $el.anchorify({ text: 'Click' });

    equal($el.find('.anchor-link').text(), 'Click');
    equal($el.text(), 'Hello, World!Click');
});

test('allows prepend anchor link instead of append', function () {
    var $el;

    $el = $('#qunit-fixture h2[data-id=7]');
    $el.anchorify({ text: 'Click', position: 'prepend' });

    equal($el.find('.anchor-link').text(), 'Click');
    equal($el.text(), 'ClickPrepend');
});

test('preserves id if exists', function () {
    var $el;

    $el = $('#existing-id');
    $el.anchorify();

    equal($el.attr('id'), 'existing-id');
    equal($el.find('.anchor-link').attr('href'), '#existing-id');
    equal($el.find('.anchor-link').text(), '¶');
});

test('ensures uniqueness of ids', function () {
    var $el1, $el2, $el3;

    $el1 = $('h2[data-id=4]');
    $el2 = $('h2[data-id=5]');
    $el3 = $('h2[data-id=6]');

    $('#qunit-fixture h2').anchorify();

    equal($el1.find('.anchor-link').attr('href'), '#same-title');
    equal($el2.find('.anchor-link').attr('href'), '#same-title-1');
    equal($el3.find('.anchor-link').attr('href'), '#same-title-2');
});

test('ensures uniqueness of ids in the whole document', function () {
    var $el;

    $el = $('h2[data-id=8]');
    $el.anchorify();

    equal($el.attr('id'), 'existing-id-1');
    equal($el.find('.anchor-link').attr('href'), '#existing-id-1');
});
