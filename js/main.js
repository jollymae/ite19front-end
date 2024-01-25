/*  ---------------------------------------------------
    Template Name: HVAC
    Description: HVAC Car Dealer HTML Template
    Author: Colorlib
    Author URI: https://www.colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/

    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
        /*------------------
            Car filter
        --------------------*/
        $('.filter__controls li').on('click', function () {
            $('.filter__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.car-filter').length > 0) {
            var containerEl = document.querySelector('.car-filter');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    //Search Switch
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    /*------------------
		Navigation
	--------------------*/
    $(".header__menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    function showDropdown() {
        var userTypeLabel = document.getElementById("userTypeLabel");
        var userType = document.getElementById("userType");
        var dropdownContent = document.getElementById("dropdownContent");
      
        userTypeLabel.style.display = "block";
        userType.style.display = "block";
        dropdownContent.style.display = "block";
      }
      
      function validateForm() {
        // You can add form validation logic here before submitting the form
        // For example, checking if the user has selected a user type
        var userType = document.getElementById("userType").value;
        if (userType === "") {
          alert("Please select a user type.");
          return false; // Prevent form submission
        }
        return true; // Allow form submission
      }
      
      

    // redirect to login
    function redirectToLogin() {
        // Add the URL you want to redirect to
        window.location.href = "#";
      }

    /*--------------------------
        Testimonial Slider
    ----------------------------*/
    $(".car__item__pic__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false
    });

    /*--------------------------
        Testimonial Slider
    ----------------------------*/
    var testimonialSlider = $(".testimonial__slider");
    testimonialSlider.owlCarousel({
        loop: true,
        margin: 0,
        items: 2,
        dots: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false,
        responsive: {
            768: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    });

    /*-----------------------------
        Car thumb Slider
    -------------------------------*/
    $(".car__thumb__slider").owlCarousel({
        loop: true,
        margin: 25,
        items: 5,
        dots: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        mouseDrag: false,
        responsive: {

            768: {
                items: 5
            },
            320: {
                items: 3
            },
            0: {
                items: 2
            }
        }
    });

    /*-----------------------
		Range Slider
	------------------------ */
    var rangeSlider = $(".price-range");
    rangeSlider.slider({
        range: true,
        min: 1,
        max: 4000,
        values: [800, 3200],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1] + ".100");
        }
    });
    $("#amount").val("$" + $(".price-range").slider("values", 0) + " - $" + $(".price-range").slider("values", 1) + ".100");

    var carSlider = $(".car-price-range");
    carSlider.slider({
        range: true,
        min: 1,
        max: 4000,
        values: [900, 3000],
        slide: function (event, ui) {
            $("#caramount").val("$" + ui.values[0] + " - $" + ui.values[1] + ".100");
        }
    });
    $("#caramount").val("$" + $(".car-price-range").slider("values", 0) + " - $" + $(".car-price-range").slider("values", 1) + ".100");

    var filterSlider = $(".filter-price-range");
    filterSlider.slider({
        range: true,
        min: 1,
        max: 1200000,
        values: [180000, 1000000],
        slide: function (event, ui) {
            $("#filterAmount").val("[ " + "$" + ui.values[0] + " - $" + ui.values[1] + " ]");
        }
    });
    $("#filterAmount").val("[ " + "$" + $(".filter-price-range").slider("values", 0) + " - $" + $(".filter-price-range").slider("values", 1) + " ]");

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*------------------
		Magnific
	--------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
		Single Product
	--------------------*/
    $('.car-thumbs-track .ct').on('click', function () {
        $('.car-thumbs-track .ct').removeClass('active');
        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.car-big-img').attr('src');
        if (imgurl != bigImg) {
            $('.car-big-img').attr({
                src: imgurl
            });
        }
    });

    /*------------------
        Counter Up
    --------------------*/
    $('.counter-num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

// Vendor carousel
$('.vendor-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0:{
            items:2
        },
        576:{
            items:3
        },
        768:{
            items:4
        },
        992:{
            items:5
        },
        1200:{
            items:6
        }
    }
});

})(jQuery);

//PAGINATION(changeable)

var currentPage = 1;

function changePage(page) {
    // Update the active class for pagination
    var paginationLinks = document.querySelectorAll('.pagination__option a');
    paginationLinks.forEach(link => link.classList.remove('active'));
    paginationLinks[page - 1].classList.add('active');

    // Update the car listings for the selected page
    updateCarListings(page);
}

function nextPage() {
    if (currentPage < 3) { // Change this condition based on the number of pages
        currentPage++;
        changePage(currentPage);
    }
}

function updateCarListings(page) {
    // Clear existing car listings
    document.getElementById('carListings').innerHTML = '';

    // Add your car listings based on the selected page
    var startIndex = (page - 1) * 4; // Assuming 4 cars per page
    var endIndex = startIndex + 4;

    var carListings = [
        { image: 'img/cars/Acura NSX.png', year: '2016', model: 'Acura NSX', mi: '35,000', transmission: 'Auto', hp: '700', option: 'For Rent', price: '$218/Month' },
        { image: 'img/cars/Acura RLX.png', year: '2020', model: 'Acura RLX', mi: '35,000', transmission: 'Auto', hp: '700', option: 'For Sale', price: '$73,900' },
        { image: 'img/cars/Alfa Romeo Giulia.png', year: '2017', model: 'Alfa Romeo Giulia', mi: '35,000', transmission: 'Auto', hp: '700', option: 'For Rent', price: '$299/Month' },
        { image: 'img/cars/Alfa Romeo Stelvio Quadrifoglio.png', year: '2018', model: 'Alfa Romeo Stelvio Quadrifoglio', mi: '35,000', transmission: 'Auto', hp: '700', option: 'For Rent', price: '$319/Month' },
        // Add more car listings here
    ];

    for (var i = startIndex; i < endIndex && i < carListings.length; i++) {
        var car = carListings[i];
        var carHtml = `
            <div class="col-lg-4 col-md-4">
                <div class="car__item">
                    <div class="car__item__pic__slider owl-carousel">
                        <img src="${car.image}" alt="">
                    </div>
                    <div class="car__item__text">
                        <div class="car__item__text__inner">
                            <div class="label-date">${car.year}</div>
                            <h5><a href="./car-details.html">${car.model}</a></h5>
                            <ul>
                                <li><span>${car.mi}</span> mi</li>
                                <li>${car.transmission}</li>
                                <li><span>${car.hp}</span> hp</li>
                            </ul>
                        </div>
                        <div class="car__item__price">
                            <span class="car-option">${car.option}</span>
                            <h6>${car.price}</h6>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('carListings').innerHTML += carHtml;
    }
}

// Initial load
updateCarListings(currentPage);
