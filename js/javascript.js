$(document).ready(function () {
    $('#arrow').on("click", function () {
        $('body, html').animate({
                scrollTop: $('main').offset().top
            }, 2000);
    });
    var $doc = $(document);
    var $main = $("main");
    var $header = $("header");
    $doc.on('scroll', function () {
        var scrollPos = $doc.scrollTop(); //jak daleko przewineliĹmy
        var sectionOffset = $main.offset().top; //gdzie jest dany element, na jakiej wysokoscio od poczÄtku strony siÄ zaczyna.
        console.log(scrollPos);
        //console.log(sectionOffset);

        if (scrollPos < sectionOffset) {
            $header.css('opacity', 1 - 1.2 * scrollPos / sectionOffset);
        }
    });
});
