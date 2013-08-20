'use strict';

(function($) {
    $(function() {
        var $window = $(window);
        var $body = $(document.body);
        var nav = $('.bs-sidenav');
        var navHtml = '';
        // Init nav sidebar
        $('.bs-docs-section h1').each(function(index, el) {
            var $this = $(el),
                children = $this.parent().nextUntil('h1', 'h3');
            $this.attr('id', 'title-' + index);
            navHtml += '<li><a href="#title-' + index + '">' + $(el).text() + '</a>';
            if (children.length) {
                navHtml += '<ul class="nav">';
                $.each(children, function(i, e) {
                    var child = $(e);
                    child.attr('id', 'title-' + index + '-' + i);
                    navHtml += '<li><a href="#title-' + index + '-' + i + '">' + $(e).text() + '</a></li>';
                });
                navHtml += '</ul>';
            }
            navHtml += '</li>';
        });
        nav.html(navHtml);
        $('li a', nav).eq(0).addClass('active');

        var navHeight = $('.navbar').outerHeight(true) + 10;

        $body.scrollspy({
            target: '.bs-sidebar',
            offset: navHeight
        });

        $('.bs-docs-container [href=#]').click(function(e) {
            e.preventDefault();
        });

        // back to top
        setTimeout(function() {
            var $sideBar = $('.bs-sidebar');

            $sideBar.affix({
                offset: {
                    top: function() {
                        var offsetTop = $sideBar.offset().top;
                        var sideBarMargin = parseInt($sideBar.children(0).css('margin-top'), 10);
                        var navOuterHeight = $('.bs-docs-nav').height();

                        this.top = offsetTop - navOuterHeight - sideBarMargin;
                    },
                    bottom: function() {
                        this.bottom = $('.bs-footer').outerHeight(true);
                    }
                }
            });
            setTimeout(function() {
                $window.scrollTop(1000);
                setTimeout(function() {
                    $window.scrollTop(0);
                }, 100);
            }, 100);
        }, 100);

        setTimeout(function() {
            $('.bs-top').affix();
        }, 100);

        // tooltip demo
        $('.tooltip-demo').tooltip({
            selector: '[data-toggle=tooltip]',
            container: 'body'
        });

        $('.tooltip-test').tooltip();
        $('.popover-test').popover();

        $('.bs-docs-navbar').tooltip({
            selector: 'a[data-toggle=tooltip]',
            container: '.bs-docs-navbar .nav'
        });

        // popover demo
        $('[data-toggle=popover]').popover();

        // button state demo
        $('#fat-btn').click(function() {
            var btn = $(this);
            btn.button('loading');
            setTimeout(function() {
                btn.button('reset');
            }, 3000);
        });
        // carousel demo
        $('.bs-docs-carousel-example').carousel();

        $window.on('load', function() {
            $body.scrollspy('refresh');
        });
    });

})(jQuery);
