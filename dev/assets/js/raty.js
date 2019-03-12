$(function() {

	$('.m-chat-body .nano').nanoScroller({
	    alwaysVisible: true,
	    scroll: 'bottom'
	})

	$('.btn-catalog').on('click', function() {
		$()
		return false
	})

	$('.btn-catalog').on('click', function() {
		$('.inside-catalog').slideToggle('fast')
		return false
	})


	$('.btn-menu').on('click', function() {
		$('.menu-catalog').addClass('active')
		$('html').css({ overflowY: 'hidden' })
		return false
	})

	$('.btn-filter').on('click', function() {
		$('.filtermenu').addClass('active')
		$('html').css({ overflowY: 'hidden' })
		return false
	})

	$('.menu-catalog-head').on('click', function() {
		$('.menu-catalog').removeClass('active')
		$('html').css({ overflowY: 'inherit' })
		return false
	})

	$('.modal').on('show.bs.modal', function (e) {
		$(this).find('select').selectmenu()
	})

	$('a.pr-slide-title').on('click', function() {
		$(this).toggleClass('active')
		$(this).parents('.pr-slide').find('.pr-slide-body').slideToggle('fast')
		return false
	})

	$('.main-b-slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	})

	$('.btn-up').click(function() {
	    $('html, body').animate({scrollTop: 0},500);
	    return false;
	})

	$('.tabs-advert-nav a').on('click', function() {
		$(this).addClass('active').siblings('a').removeClass('active')
		$('.tabs-advert-content > div').eq( $(this).index() ).addClass('active').siblings('div').removeClass('active')
		return false
	})

	$('.tabs-avert-link').on('click', function() {
		$(this).toggleClass('active')
		$(this).next('.tabs-advert-slide').slideToggle('fast')
		return false
	})

	$('.pr-p-img-big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.pr-p-img-preview'
	})

	$('.pr-p-img-preview').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.pr-p-img-big',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
        centerPadding: '0',
        responsive: [
		    {
		      breakpoint: 1199,
		      settings: {
		        slidesToShow: 3,
        		centerPadding: '50px',
		      }
		    },
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 7,
        		centerPadding: '0',
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 5,
        		centerPadding: '0',
		      }
		    },
		    {
		      breakpoint: 420,
		      settings: {
		        slidesToShow: 3,
        		centerPadding: '25px',
		      }
		    }
		]
	})

	$('.close-side-pp-info').on('click', function() {
		$(this).parents('.side-pp-info').slideUp('fast')
		return false
	})

	$('.table-st-line').on('click', function() {
		$(this).next('.table-st-slide').slideToggle('fast')
	})

	$('.editaverts-imgs').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.editaverts-imgs-preview'
	})

	$('.editaverts-imgs-preview').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.editaverts-imgs',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
        centerPadding: '0',
        responsive: [
		    {
		      breakpoint: 1199,
		      settings: {
		        slidesToShow: 3,
        		centerPadding: '0',
		      }
		    },
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 3,
        		centerPadding: '0',
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 5,
        		centerPadding: '0',
		      }
		    },
		    {
		      breakpoint: 420,
		      settings: {
		        slidesToShow: 3,
        		centerPadding: '0',
		      }
		    }
		]
	})

	$('.ui-slider-mileage').slider({
		range: true,
		min: 0,
		max: 500,
		values: [80,400],
		slide: function( event, ui ) {
			$('.inp-00').html( ui.values[0] )
			$('.inp-01').html( ui.values[1] )
		}
    })
    $('.inp-00').html( $('.ui-slider-mileage').slider('values',0) )
    $('.inp-01').html( $('.ui-slider-mileage').slider('values',1) )

    $('.fg-btndown').on('click', function() {
    	$(this).next('.dr-menu-filter').slideToggle('fast')
		$('.dr-menu-filter .nano').nanoScroller({
			alwaysVisible: true
		})
    	return false
    })
    $('.close-mf').on('click', function() {
    	$(this).parents('.dr-menu-filter').slideUp('fast')
    })
    $('.dr-menu-filter-head').on('click', function() {
    	$(this).parents('.dr-menu-filter').slideUp('fast')
    	return false
    })

	$('.ui-slider-vtt').slider({
		range: true,
		min: 0,
		max: 500,
		values: [80,400],
		slide: function( event, ui ) {
			$('.inp-02').html( ui.values[0] )
			$('.inp-03').html( ui.values[1] )
		}
    })
    $('.inp-02').html( $('.ui-slider-vtt').slider('values',0) )
    $('.inp-03').html( $('.ui-slider-vtt').slider('values',1) )

	$('.ui-slider-year').slider({
		range: true,
		min: 1960,
		max: 2018,
		values: [1980,2000],
		slide: function( event, ui ) {
			$('.inp-04').html( ui.values[0] )
			$('.inp-05').html( ui.values[1] )
		}
    })
    $('.inp-04').html( $('.ui-slider-year').slider('values',0) )
    $('.inp-05').html( $('.ui-slider-year').slider('values',1) )

    $(document).mouseup(function (e){
		var div = $('.dr-menu-filter')
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			div.hide()
		}
		var div = $('.inside-catalog')
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			div.hide()
		}
	})


	$('.slider-averts').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
        responsive: [
		    {
		      breakpoint: 1199,
		      settings: {
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 575,
		      settings: {
		        slidesToShow: 1,
		        centerMode: true,
		        centerPadding: '20px',
		      }
		    }
		]
	})

	// search popup
	$('.h-search input').focus(function() {
		$('.h-search-popup').slideDown('fast')
	})

	$('.h-search input').blur(function() {
		$('.h-search-popup').slideUp(0)
	})
	// /search popup

})