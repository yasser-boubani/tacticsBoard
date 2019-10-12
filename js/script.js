$(function () {
    // controls hide/show on double click on the board
    $("#board").dblclick(function () {
        $(".controls").fadeToggle();
    });

    // options menu
    $(".menu").click(function () {
        $(".options").slideToggle();
        $(".add-item-menu").hide();
    })

    // option addItem()
    $("#addItem").click(function () {
        $(".options").fadeOut("fast");
        $(".add-item-menu").slideDown();
    });

    
});