console.log('appf.js 1');

/*
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define([
			'jquery',
			'foundation',
        ], factory);

    } else {
        factory(jQuery);
    }
}(function ($,foundation) {
	console.log('$: '+$);
	console.log('foundation: '+foundation);
}));*/

define([
	'jquery',
	'what-input',
	'foundation',
    'jquery/ui',
    'Magento_Ui/js/modal/alert',
    'Magento_Ui/js/modal/modal',
    'Magento_Ui/js/modal/confirm',
    'Magento_Ui/js/modal/prompt',
], function ($,whatInput,foundation,ui,alert,modal,confirm,prompt) {
		
	var foundation = $(document).foundation();

	if($(".checkout-index-index").length) {
		checkIfXhrIsDone();
	}

	function checkIfXhrIsDone() {
		setTimeout(function() {
			if($("#checkout-step-shipping_method").length == 0) {
				checkIfXhrIsDone();
			} else {
				setFoungentoColorBg();
			}
		}, 1000);
	}

	function setFoungentoColorBg() {
		/* RANDOM BVACKGROUND */
		/*$("[class^=foungento-], .foungento-related, .foungento-upsell, .foungento-other, .foungento-opc-sidebar, .foungento-opc-wrapper").each(function(k,v) {
			var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
			$(v).css({
				background: hue
			})
		});*/
	}

	function setIfSmallView() {
		/* HEADER LINKS */
		$(".header.links").removeClass('vertical'); 
		$(".header.links").addClass('float-right'); 
		$(".options.switcher-options").addClass('float-right');
		if(Foundation.MediaQuery.current == 'small') {
			$(".header.links").addClass('vertical');
			$(".header.links").removeClass('float-right');
			$(".options.switcher-options").removeClass('float-right');
		}

		/* HEADER CURRENCY */
		$(".options.switcher-options").addClass('float-right');
		if(Foundation.MediaQuery.current == 'small') {
			$(".options.switcher-options").removeClass('float-right');
		}

		/* LAYERED NAVIGATION */
		$(".filter-options-content").show(); 
		if(Foundation.MediaQuery.current == 'small') {
			$(".filter-options-title").click(function() {
				$(this).next().toggle();
			});
			$(".filter-options-content").hide();
		}


	}



	$(document).ready(function () {
		
		setFoungentoColorBg();

		$('.parent').addClass('is-animating');



		/* ADDED SMALL BUTTON */
		$("button").each(function () {
			$(this).addClass('small button');
		});

		/* ADDED SMALL HREF ACTION */
		/*$("a.action").each(function () {
			$(this).addClass('small button');
		});*/

		/* ADDED SMALL ALERT BUTTON */
		/*$("a.back").each(function () {
			$(this).addClass('small alert button');
		});*/

		/* REMOVED PAGE-TITLE GRID */
		$(".product-info-main .page-title-wrapper").removeClass('small-12 medium-12 large-12 columns');

		/* ADDITIONAL ONCLICK */
		/*$(".tabs li.tabs-title a").click(function() {
			$(".tabs-content .tabs-panel").removeClass('is-active');
		});*/

		/* 2 COLUMNS LEFT */
		if($(".sidebar").length) {
			$(".page-layout-2columns-left .foungento-main").addClass("small-12 medium-8 large-9 columns");
		}

		if(Foundation.MediaQuery.current == 'small') {
			$(".filter-options-title").click(function() {
				$(this).next().toggle();
			});
			$(".filter-options-content").hide();
		}

		$(".message.info.empty").addClass('foungento-message-info-empty small-12 medium-12 large-12 columns');

		/*
	 	 * CHECKOUT PAGE GRID
		 */

		 $(".checkout-index-index .authentication-wrapper, .checkout-index-index .opc-progress-bar, .checkout-index-index .opc-estimated-wrapper, .checkout-index-index .checkout-messages, .checkout-index-index .opc-wrapper").addClass('large-8 columns');

		 $(".checkout-index-index .opc-sidebar").addClass('large-4 columns');

		 setIfSmallView();


		 /* CATALOG PRODUCT REVIEW LINK */
		 jQuery(".reviews-actions .action.view").click(function() {
		 	jQuery("#reviews-tab-label").trigger('click');
		 	animateScrollToHtmlElement(jQuery("#product-review-container").position().top, 500);
		 });

		 jQuery(".reviews-actions .action.add").click(function() {
		 	jQuery("#reviews-tab-label").trigger('click');
		 	animateScrollToHtmlElement(jQuery(".block.review-add").position().top, 500);
		 });

		 /* LISTENER */
		actionCloseListener();
		// no modal   = checkout-index-index page-layout-1column
		// has modal  = checkout-index-index page-layout-1column _has-modal
		//modal-popup = z-index: 900;
		function actionCloseListener() {
			/*if(jQuery(".modals-wrapper .action-close").length) {
				jQuery(".modals-wrapper .action-close").click(function() {
					jQuery(".modal-popup").removeAttr('css');
					jQuery("body").removeClass('_has-modal');
				});
			} else {
				setTimeout(function() {
					actionCloseListener();
				}, 500);
			}*/

		 /*setTimeout(function() {
		 	if(jQuery(".action-close").length) {
		 		jQuery(".action-close").click(function() {
					jQuery(".modals-wrapper").hide();
				});
		 	} else {
		 		actionCloseListener();
		 		console.log('listene');
			}
		 }, 500);*/
		}
		 

		 

	});

	function animateScrollToHtmlElement(top, speed) {
		var body = jQuery("html, body");
	 	body.animate({scrollTop: top }, speed, 'swing', function() { });
	}

	$(window).resize(function () {
		setIfSmallView();
	});



	$("#showAlert").click(function() {
		confirm({
			title: 'Some title',
			content: 'Some content',
			actions: {
				confirm: function() {
					console.log('confirm');
				},
				cancel: function() {
					console.log('cancel');
				},
				always: function() {
					console.log('always');
				}
			}
		});
	});




	$(window).scroll(function() {
        if($(window).scrollTop() == $(document).height() - $(window).height()) {
            if(typeof jQuery(".pages-items:last li.current").next().find('a').attr('href') != 'undefined') {
                /* Removed Current */

                //console.log(jQuery(".pages-items:last li.current").next().find('a').attr('href'));
				var _next_url = jQuery(".pages-items:last li.current").next().find('a').attr('href');
				$(".pages-items:last li.current").removeClass('current');
                $.ajax({
                    url: _next_url,
                    context: document.body,
                    cache: true,
                }).done(function(html) {
                    $(".pages-items:last li.current").removeClass('current');
                    //console.log($(html).find('.products.list'));
                    //console.log($(html).find('.items.pages-items').html());
                    
                    $('.items.pages-items').html($(html).find('.items.pages-items').html());
                   	
                   	
                   	$(".products.list").append($(html).find('.items.pages-items').html());
                                            
                    console.log('done');
                }).complete(function() {
                	console.log('complete');
                }).success(function(html) {
                    console.log('success');
                });

            }
        }
    });
});