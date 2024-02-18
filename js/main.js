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



    getVehiclesSelection();
    async function getVehiclesSelection() {
      try {
        const response = await fetch("http://localhost:8000/api/vehicles/", {
          method: 'GET',  // Change the method to GET
          headers: {
            Accept: "application/json",
          },
        });
    
        if (response.ok) {
          const json = await response.json();
          let carsContainer =  "";
          let countArr = 0;

     
          const anchorElements = document.querySelectorAll('.car__item__text__inner a');


        const imageUrls = [
            'http://127.0.0.1:5501/img/Car%20Listing/Mercedez-Benz%20Gullwing.png',
            'http://127.0.0.1:5501/img/Car%20Listing/McLaren%20720S.png',
            'http://127.0.0.1:5501/img/Car%20Listing/Aston%20Martin%20DB11.png',
            'ihttp://127.0.0.1:5501/img/Car%20Listing/1930%20Bentley%20Speed%20Six.png',
            'http://127.0.0.1:5501/img/Car%20Listing/1957%20Cadillac%20Eldorado%20Biarritz.png',
            'http://127.0.0.1:5501/img/Car%20Listing/Audi%20Q8.png',
            'http://127.0.0.1:5501/img/Car%20Listing/Ferrari%20488%20GTB.png',
            'http://127.0.0.1:5501/img/Car%20Listing/Volkswagen%20Taigo.png',
            'http://127.0.0.1:5501/img/Car%20Listing/BMW%20M8.png',
            'http://127.0.0.1:5501/img/Car%20Listing/Audi%20A4.png',
            'http://127.0.0.1:5501/img/Car%20Listing/Jaguar%20E-Type.png',
            'http://127.0.0.1:5501/img/Car%20Listing/Bugatti%20Chiron.png',
            'http://127.0.0.1:5501/img/Car%20Listing/Lexus%20LC.png',
            'http://127.0.0.1:5501/img/Car%20Listing/Land%20Rover%20Range%20Rover.png',
            'http://127.0.0.1:5501/img/Car%20Listing/Maserati%20Ghibli.png'
        ];

          json.forEach((element, index) => {
          console.log(element.vehicle_id);

          // Retrieve the HTML link directly from the DOM
            const htmlLink = document.getElementById(`carBrandModel_${countArr}`);
            // const hrefValue = htmlLink ? htmlLink.href : '';
            const anchorElement = anchorElements[index];
           const hrefValue = anchorElement ? anchorElement.href : '';


           // Check if a new row should be started (every 3rd iteration)
           if (index % 3 === 0) {
            carsContainer += '<div class="row">';
        }

          // Append each car's HTML to the carsContainer
    
        carsContainer += `
        <div class="col-lg-4 col-md-4 mt-5">
        <div class="car__item">
            <div class="car__item__pic__slider owl-carousel">
            <img src="${imageUrls[countArr]}" alt="Car Image">
            </div>
            <div class="car__item__text">
                <div class="car__item__text__inner">
                    <div id="vin_number">${element.VIN}</div>
                    <h5><a href="${hrefValue}" id="carBrandModel_${countArr}">${element.brand_name} 
                        <span id="carModel_${countArr}">${element.model_name}</span></a></h5>
                    <ul>
                        <li><span id="carPrice"> ${element.price}</span></li>
                        <li><span id="carBodyStyle">${element.body_style}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`;



     

        // Check if the current iteration completes a row
                if ((index + 1) % 3 === 0 || index === json.length - 1) {
                    carsContainer += '</div>';
                }
          countArr++;
    
          


          });
          

          document.getElementById("cars_container").innerHTML = carsContainer;

          // Assuming you want to update the first car's details (index 0)
          const firstCarData = json[0];
    
          // Update vin_number
          document.getElementById("vin_number").textContent = firstCarData.vin_number;
    
          // Update carBrandModel
          const carBrandModelElement = document.getElementById("carBrandModel");
          carBrandModelElement.innerHTML = `${firstCarData.brand_name} <span id="carModel">${firstCarData.model}</span>`;
    
          // Update carPrice
          document.getElementById("carPrice").textContent = `price | $${price[firstCarData.vehicle_id]}`;
    
          // Update carBodyStyle
          document.getElementById("carBodyStyle").textContent = firstCarData.body_style;
    
        } else {
          console.error("Failed to fetch vehicles for selection. Status:", response.status);
        }
      } catch (error) {
        console.error("An error occurred while fetching vehicles for selection", error);
        }
      }
    
     // Function to get and update data
     function getVehicleData() {
      // Get the element by its ID
      var dataContainer = document.getElementById("dataContainer");
    }
    
    // Function to reset filters
    function resetFilters() {
        // Reset all select elements to their default values
        document.querySelectorAll('.filter-options-section select').forEach(select => {
          select.value = '';
        });
      
        // Trigger the form submission to fetch all vehicles without filters
        document.querySelector('.form-inline').dispatchEvent(new Event('submit'));
      }