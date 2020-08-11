function update() {
    $(' .hour-block').each(function () {
        $(this).find('textarea').addClass('current')
    });
}

update();