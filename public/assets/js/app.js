// ALWAYS START AT TOP OF SCREEN
window.addEventListener("load", function() {
    setTimeout(function() {
        window.scrollTo(0, 1);
    }, 0);
});

$(document).ready(function() {
	
    var NavVisible = false;
    var NowActive = 0;
    var ClickTarget = 0;
    var sideNav = $("#toggle_nav");
    var NavLinks = ['nav0', 'nav1', 'nav2', 'nav3'];
    var NavImgs = ['nav0', 'nav1', 'nav2', 'nav3'];

    $(document).on('click', '#navToggle', slideNavbar);
    $(document).on('click', '.navButton', navButtonClick);

    // INITIALIZE NAVBAR
    initNavbar();


    // NAVBAR SCROLLING 
    $(function() {

        $('a[href*=\\#]').on('click', function(event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top
            }, 300);

        });
    });

    $("#page-wrapper").scrollspy({
        target: "#toggle_nav"
    });

    $('[data-spy="scroll"]').each(function() {
        var $spy = $(this).scrollspy('refresh');
    })

    // CHANGE NAVBAR ICONS ON SCROLL
    $(".nav").on("activate.bs.scrollspy", function() {

        var active = $(".nav li.active").index();

        if (active != NowActive) {

            // turn off the old button
            $("#" + NavLinks[NowActive]).css("background-image", "url('http://nickel-dime.com/OPENSRC/IMG/CA_" + NavImgs[NowActive] + "-off.png')");

            turnOffHighlight(NowActive);

            $("#" + NavLinks[NowActive]).animate({
                zoom: '98%'
            }, 100);

            // turn on the new button
            $("#" + NavLinks[active]).css("background-image", "url('http://nickel-dime.com/OPENSRC/IMG/CA_" + NavImgs[active] + "-on.png')");

            turnOnHighlight(active);

            $("#" + NavLinks[active]).animate({
                zoom: '103%'
            }, 100);

            NowActive = active;
        }

    })

    function initNavbar() {

        NowActive = 0;
        ClickTarget = 0;

        $(".navHighlight").hide();

        $('#navToggle img').attr("src", "http://nickel-dime.com/OPENSRC/IMG/CA_nav-up.png");

        // turn on first button
        $("#" + NavLinks[NowActive]).css("background-image", "url(http://nickel-dime.com/OPENSRC/IMG/CA_" + NavImgs[NowActive] + "-on.png)");
        $("#" + NavLinks[NowActive] + " .navHighlight").css("background-color", "lime");


        NavVisible = true;
    }

    // SLIDE THE NAVBAR DOWN / UP
    function toggleNavbar() {

        if (NavVisible) {

            $("#toggle_nav").addClass("CA_hideNav");
            $('#navToggle img').attr("src", "http://nickel-dime.com/OPENSRC/IMG/CA_nav-down.png");

            NavVisible = false;

        } else {

            $("#toggle_nav").removeClass("CA_hideNav");
            $('#navToggle img').attr("src", "http://nickel-dime.com/OPENSRC/IMG/CA_nav-up.png");

            NavVisible = true;
        }
    }

    function turnOffHighlight(index) {

        var highlight = $("#" + NavLinks[index] + " .navHighlight");
        highlight.css("background", "transparent");
        highlight.css("margin-left", "31px");
    }

    function turnOnHighlight(index) {

        highlight = $("#" + NavLinks[index] + " .navHighlight");
        highlight.css("background-color", "lime");
        highlight.css("margin-left", "29px"); // corrects for the zoom
    }

    // CHANGE NAVBAR ICONS ON CLICK
    function navButtonClick() {

        ClickTarget = parseInt($(this).attr('data-value'));

        $("#" + NavLinks[ClickTarget]).animate({ zoom: '98%' }, 100);
        $("#" + NavLinks[NowActive]).animate({ zoom: '103%' }, 100);

    }

    // SLIDE THE NAVBAR LEFT / RIGHT
    function slideNavbar() {

        if (NavVisible) {

            sideNav.css("width", "55px");
            sideNav.removeClass("slideNavRight");
            sideNav.addClass("slideNavLeft");

            $('#navToggle img').attr("src", "http://nickel-dime.com/OPENSRC/IMG/CA_nav-down.png");

            $(".navHighlight").show(600);

            NavVisible = false;

        } else {

            sideNav.css("width", "50px");
            sideNav.removeClass("slideNavLeft");
            sideNav.addClass("slideNavRight");

            $('#navToggle img').attr("src", "http://nickel-dime.com/OPENSRC/IMG/CA_nav-up.png");

            $(".navHighlight").hide(0);

            NavVisible = true;
        }
    }
});
