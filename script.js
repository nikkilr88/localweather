/*
 * TODO 
 * Convert all temps on page
 * Make responsive √
 * Make it pretty
 */

$(document).ready(function() {

 /*
  * Hide weather section below details
  */
  
  $('.weather').hide();

  /*
   * Load any color changes made by user
   */
  
  var boxColor = localStorage.getItem('border-top');
  var linkColor = localStorage.getItem('color');
  var loaderColor = localStorage.getItem('border-loader');
  
  var setColor = localStorage.getItem('color');
  var userSetColor = localStorage.getItem('userSetColor');
  
  var boxColor1 = $('.color1').css('background-color');
 
  $('.morn, .mid, .night').css('border-top', boxColor);
 
  //$('.act').css('color', linkColor);
  $('.loader').css('border-top', loaderColor);
  
  $('#userColor').val(userSetColor);
  
  /*
  console.log('box: ', boxColor1 + 'set: ', setColor);
  
  if(boxColor1 == setColor) {
    $('.color1').addClass('selected');
    console.log('same');
  }
  */
  
  /*
   * Settings menu
   */

  $('.settings').draggable();
  
  $('.X').click(function() {
    $('.settings').hide();
  });

  $('.fa-cog').click(function() {
   
    $('.settings').show();
 
  });

  /*
   * Color picker
   */
  
/*
  var $colors = $('.opt').click(function() {
    $colors.removeClass('selected');
    $(this).addClass('selected');
    
  });
  */
  
  $('#setColor').click(function() {
    
    var $userColor = $('#userColor').val();
    console.log($userColor);
    
    $('.morn, .mid, .night').css('border-top', '7px solid ' + $userColor);
    //$('.act').css('color', '#f7b7e0');
    $('.loader').css('border-top', '5px solid' + $userColor);
    
     localStorage.setItem('border-top', '7px solid' + $userColor);
    //localStorage.setItem('color', '#f7b7e0');
    localStorage.setItem('border-loader', '5px solid' + $userColor);
    
    localStorage.setItem('color', $userColor);
    localStorage.setItem('userSetColor', $userColor);

  });
  
  $('.color1').click(function() {
    // $('.temp').css('color', '#f7b7e0');
    $('.morn, .mid, .night').css('border-top', '7px solid rgb(247, 183, 224)');
    //$('.act').css('color', '#f7b7e0');
    $('.loader').css('border-top', '5px solid #f7b7e0');
    
    $('#userColor').val('#f7b7e0');

    localStorage.setItem('border-top', '7px solid #f7b7e0');
    //localStorage.setItem('color', '#f7b7e0');
    localStorage.setItem('border-loader', '5px solid #f7b7e0');
    
    localStorage.setItem('color', 'rgb(247, 183, 224)');
    
    localStorage.setItem('userSetColor', '#f7b7e0');

  });

  $('.color2').click(function() {
    //$('.temp').css('color', '#dfa0ff');
    $('.morn, .mid, .night').css('border-top', '7px solid #d6b2e8');
    // $('.act').css('color', '#dfa0ff');
    $('.loader').css('border-top', '5px solid #d6b2e8');
    
    $('#userColor').val('#d6b2e8');
    
    localStorage.setItem('userSetColor', '#d6b2e8');

    localStorage.setItem('border-top', '7px solid #d6b2e8');
    //localStorage.setItem('color', '#dfa0ff');
    localStorage.setItem('border-loader', '5px solid #d6b2e8');
    
  });

  $('.color3').click(function() {
    //$('.temp').css('color', '#a8bddd');
    $('.morn, .mid, .night').css('border-top', '7px solid #a8bddd');
    //$('.act').css('color', '#a8bddd');
    $('.loader').css('border-top', '5px solid #a8bddd');
    
    $('#userColor').val('#a8bddd');
    
    localStorage.setItem('userSetColor', '#a8bddd');

    localStorage.setItem('border-top', '7px solid #a8bddd');
    // localStorage.setItem('color', '#a8bddd');
    localStorage.setItem('border-loader', '5px solid #a8bddd');

  });

  $('.color4').click(function() {
    //$('.temp').css('color', '#a8bddd');
    $('.morn, .mid, .night').css('border-top', '7px solid #a5646a');
    //$('.act').css('color', '#a8bddd');
    $('.loader').css('border-top', '5px solid #a5646a');
    
     $('#userColor').val('#a5646a');
    
    localStorage.setItem('userSetColor', '#a5646a');

    localStorage.setItem('border-top', '7px solid #a5646a');
    // localStorage.setItem('color', '#a8bddd');
    localStorage.setItem('border-loader', '5px solid #a5646a');

  });

  $('.color5').click(function() {
    //$('.temp').css('color', '#a8bddd');
    $('.morn, .mid, .night').css('border-top', '7px solid #c9c3c3');
    //$('.act').css('color', '#a8bddd');
    $('.loader').css('border-top', '5px solid #c9c3c3');
    
    $('#userColor').val('#c9c3c3');
    
    localStorage.setItem('userSetColor', '#c9c3c3');

    localStorage.setItem('border-top', '7px solid #c9c3c3');
    // localStorage.setItem('color', '#a8bddd');
    localStorage.setItem('border-loader', '5px solid #c9c3c3');

  });

  $('.color6').click(function() {
    //$('.temp').css('color', '#a8bddd');
    $('.morn, .mid, .night').css('border-top', '7px solid #60779b');
    //$('.act').css('color', '#a8bddd');
    $('.loader').css('border-top', '5px solid #60779b');

     $('#userColor').val('#60779b');
    
    localStorage.setItem('userSetColor', '#60779b');
    
    localStorage.setItem('border-top', '7px solid #60779b');
    // localStorage.setItem('color', '#a8bddd');
    localStorage.setItem('border-loader', '5px solid #60779b');

  });

  /*
   * Expand weather details
   */

  $('.details').on('click', function() {

    var scrollBottom = $(window).scrollTop() + $(window).height();

    $('.weather').slideToggle();

    if (scrollBottom < $('.first').offset().top) {

      $('html, body').animate({
        scrollTop: $('.first').offset().top - 50
      }, 1500);
    }

  });

  //Details fade in on scroll
  /*
  $(window).scroll(function() {

    $('.sect').each(function() {

      var topObject = $(this).offset().top;

      var bottomWindow = $(window).scrollTop() + $(window).height();

      if (topObject < bottomWindow - 75) {

        if ($(this).css("opacity") == 0) {
          $(this).fadeTo(800, 1);
        }

      } else {

        if ($(this).css("opacity") == 1) {
          $(this).fadeTo(800, 0);
        }
      }

    });
  });
  
  */

  /*
   * Month names for nav date
   */

  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  /*
   * Show time in nav and update every second
   */

  function showTime() {

    var d = new Date();

    if (d.getMinutes().length < 2) {
      currTime = monthNames[d.getMonth()] + '.' + d.getDate() + '.' + d.getFullYear() + ' | ' + d.getHours() + ':0' + d.getMinutes();
    } else {
      currTime = monthNames[d.getMonth()] + '.' + d.getDate() + '.' + d.getFullYear() + ' | ' + d.getHours() + ':' + d.getMinutes();
    }

    $('.time').html(currTime);
  }

  setInterval(showTime, 1000);

  /*
   *Get user location
   */

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(location) {

      var lat = location.coords.latitude;
      var lon = location.coords.longitude;

      /*
       * API links api for current weather and api2 for daily
       */

      var api = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial&APPID=b0006e6b1d9b6ebf1a4b8baa93e3eb5e';

      var api2 = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat + '&lon=' + lon + '&cnt=6&units=imperial&APPID=b0006e6b1d9b6ebf1a4b8baa93e3eb5e';

      /*
       * API Daily Weather Information
       */

      $.getJSON(api2, function(data2) {

        /*
         * List variables round temps
         */

        var temp1C = Math.round((data2.list[1].temp.max - 32) * 5 / 9);
        var temp2C = Math.round((data2.list[2].temp.max - 32) * 5 / 9);
        var temp3C = Math.round((data2.list[3].temp.max - 32) * 5 / 9);

        var temp1 = Math.round(data2.list[1].temp.max);
        var temp2 = Math.round(data2.list[2].temp.max);
        var temp3 = Math.round(data2.list[3].temp.max);

        /*
         * Get day for daily forecast
         */

        var dt = data2.list[0].dt;
        var a = new Date();
        a.setTime(dt * 1000);
        var day = a.getDay();

        var dt1 = data2.list[1].dt;
        var b = new Date();
        b.setTime(dt1 * 1000);
        var day1 = b.getDay();

        var dt2 = data2.list[2].dt;
        var c = new Date();
        c.setTime(dt2 * 1000);
        var day2 = c.getDay();

        var dt3 = data2.list[3].dt;
        var d = new Date();
        d.setTime(dt3 * 1000);
        var day3 = d.getDay();

        var dt4 = data2.list[4].dt;
        var e = new Date();
        e.setTime(dt4 * 1000);
        var day4 = e.getDay();

        var dt5 = data2.list[5].dt;
        var f = new Date();
        f.setTime(dt4 * 1000);
        var day4 = f.getDay();

        var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

        /*
         * Icon codes and variables for replacements
         */

        var iconUrl1 = 'http://openweathermap.org/img/w/' + data2.list[1].weather[0].icon + '.png';
        var iconUrl2 = 'http://openweathermap.org/img/w/' + data2.list[2].weather[0].icon + '.png';
        var iconUrl3 = 'http://openweathermap.org/img/w/' + data2.list[3].weather[0].icon + '.png';

        var iconCode1 = data2.list[1].weather[0].icon;
        var iconCode2 = data2.list[2].weather[0].icon;
        var iconCode3 = data2.list[3].weather[0].icon;

        var newIcon1 = '';
        var newIcon2 = '';
        var newIcon3 = '';

        /*
         * Switch out icons
         */

        switch (iconCode1) {

          case '01d':
            newIcon1 = '<i class="wi wi-day-sunny"></i>';
            break;

          case '02d':
            newIcon1 = '<i class="wi wi-day-cloudy"></i>';
            break;

          case '03d':
            newIcon1 = '<i class="wi wi-cloud"></i>';
            break;

          case '04d':
            newIcon1 = '<i class="wi wi-cloudy"></i>';
            break;

          case '09d':
            newIcon1 = '<i class="wi wi-showers"></i>';
            break;

          case '10d':
            newIcon1 = '<i class="wi wi-rain"></i>';
            break;

          case '11d':
            newIcon1 = '<i class="wi wi-thunderstorm"></i>';
            break;

        }

        switch (iconCode2) {

          case '01d':
            newIcon2 = '<i class="wi wi-day-sunny"></i>';
            break;

          case '02d':
            newIcon2 = '<i class="wi wi-day-cloudy"></i>';
            break;

          case '03d':
            newIcon2 = '<i class="wi wi-cloud"></i>';
            break;

          case '04d':
            newIcon2 = '<i class="wi wi-cloudy"></i>';
            break;

          case '09d':
            newIcon2 = '<i class="wi wi-showers"></i>';
            break;

          case '10d':
            newIcon2 = '<i class="wi wi-rain"></i>';
            break;

          case '11d':
            newIcon2 = '<i class="wi wi-thunderstorm"></i>';
            break;
        }

        switch (iconCode3) {

          case '01d':
            newIcon3 = '<i class="wi wi-day-sunny"></i>';
            break;

          case '02d':
            newIcon3 = '<i class="wi wi-day-cloudy"></i>';
            break;

          case '03d':
            newIcon3 = '<i class="wi wi-cloud"></i>';
            break;

          case '04d':
            newIcon3 = '<i class="wi wi-cloudy"></i>';
            break;

          case '09d':
            newIcon3 = '<i class="wi wi-showers"></i>';
            break;

          case '10d':
            newIcon3 = '<i class="wi wi-rain"></i>';
            break;

          case '11d':
            newIcon3 = '<i class="wi wi-thunderstorm"></i>';
            break;
        }

        /*
        $('.c').click(function() {

  
          $('.f').removeClass('act').addClass('notact');
          $('.c').removeClass('notact').addClass('act');
          
          
          mornTemp = ((mornTemp - 32) * 5 / 9);
          tempDay = Math.round((data.list[0].temp.day - 32) * 5 / 9);
          tempNight = Math.round((data.list[0].temp.night - 32) * 5 / 9);
          tempTomorrow = Math.round((data.list[1].temp.max - 32) * 5 / 9);  
          

        });
*/

        /*
         * Convert from F to C
         */

        $('.c').on('click', function() {

          $('.morn').html('<section class="day">' + days[day1] + '</section>' + newIcon1 + '<section class="daytemp">' + temp1C + '<small class="sm2">°C</small></section>');

          $('.mid').html('<section class="day">' + days[day2] + '</section>' + newIcon2 + '<section class="daytemp">' + temp2C + '<small class="sm2">°C</small></section>');

          $('.night').html('<section class="day">' + days[day3] + '</section>' + newIcon3 + '<section class="daytemp">' + temp3C + '<small class="sm2">°C</small></section>');

          $('.f').removeClass('act').addClass('notact');
          $('.c').removeClass('notact');
          $('.c').addClass('act');

        });

        /*
         * Convert from C to F
         */

        $('.f').on('click', function() {

          $('.morn').html('<section class="day">' + days[day1] + '</section>' + newIcon1 + '<section class="daytemp">' + temp1 + '<small class="sm2">°F</small></section>');

          $('.mid').html('<section class="day">' + days[day2] + '</section>' + newIcon2 + '<section class="daytemp">' + temp2 + '<small class="sm2">°F</small></section>');

          $('.night').html('<section class="day">' + days[day3] + '</section>' + newIcon3 + '<section class="daytemp">' + temp3 + '<small class="sm2">°F</small></section>');

          $('.c').removeClass('act').addClass('notact');
          $('.f').removeClass('notact').addClass('act');

        });

        /*
         * Display three day forecast in top section
         */

        $('.morn').html('<section class="day">' + days[day1] + '</section>' + newIcon1 + '<section class="daytemp">' + temp1 + '<small class="sm2">°F</small></section>');

        $('.mid').html('<section class="day">' + days[day2] + '</section>' + newIcon2 + '<section class="daytemp">' + temp2 + '<small class="sm2">°F</small></section>');

        $('.night').html('<section class="day">' + days[day3] + '</section>' + newIcon3 + '<section class="daytemp">' + temp3 + '<small class="sm2">°F</small></section>');

        $('.hilo').html(Math.round(data2.list[0].temp.max) + ' <small class="sm2">°F</small>' + ' / ' + Math.round(data2.list[0].temp.min) + '<small class="sm2">°F</small>');

      });

      /*
       * API Current Weather
       */

      $.getJSON(api, function(data) {

        /*
         * Icon code for current weather and variable for replacement
         */

        var iconCode = data.weather[0].icon;
        var iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png';

        var newIcon = '';

        /*
         * Switch out icon
         */

        switch (iconCode) {

          case '01n':
            newIcon = '<i class="wi wi-night-clear"></i>';
            break;

          case '01d':
            newIcon = '<i class="wi wi-day-sunny"></i>';
            break;

          case '02n':
            newIcon = '<i class="wi wi-night-alt-cloudy"></i>';
            break;

          case '02d':
            newIcon = '<i class="wi wi-day-cloudy"></i>';
            break;

          case '03n':
          case '03d':
            newIcon = '<i class="wi wi-cloud"></i>';
            break;

          case '04n':
          case '04d':
            newIcon = '<i class="wi wi-cloudy"></i>';
            break;

          case '09n':
          case '09d':
            newIcon = '<i class="wi wi-showers"></i>';
            break;

          case '10n':
            newIcon = '<i class="wi wi-night-alt-rain"></i>';
            break;

          case '10d':
            newIcon = '<i class="wi wi-rain"></i>';
            break;

          case '11n':
          case '11d':
            newIcon = '<i class="wi wi-thunderstorm"></i>';
            break;
        }

        /*
         * Convert timestamp for sunrise / sunset and display
         */

        var secRise = data.sys.sunrise;
        var secSet = data.sys.sunset;

        var dateRise = new Date(secRise * 1000);
        var dateSet = new Date(secSet * 1000);

        var timeRise = dateRise.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        });

        var timeSet = dateSet.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        });

        var temp = Math.round(data.main.temp);
        var mainTemp = data.main.temp;

        /*
         * Remove loader once content loads
         */

        $('.temp').html(temp + '<p class="sm">°F</p>');
        $('.loader').remove();

        /*
         * Convert from F to C
         */

        $('.c').on('click', function() {
          $('.temp').html(Math.round((temp - 32) * 5 / 9) + '<p class="sm ">°C</p>');

          $('.f').removeClass('act').addClass('notact');
          $('.c').removeClass('notact');
          $('.c').addClass('act');

        });

        /*
         * Convert from C to F
         */

        $('.f').on('click', function() {
          $('.temp').html(temp + '<p class="sm ">°F </p> <p class="sm ">');

          $('.c').removeClass('act').addClass('notact');
          $('.f').removeClass('notact').addClass('act');

        });

        /*
         * Display current weather information
         */

        $('.current').html(newIcon + ' ' + data.weather[0].main);

        $('.location').html(data.name + ', ' + data.sys.country);

        $('.curr').html(data.weather[0].description + '<br />' + '<section>' + mainTemp + '<small class="sm2">°F</small>' + '</section>');

        $('.humid').html(data.main.humidity + '%');

        $('.riseSet').html('<section class="riseCont">' + 'Sunrise: <br />' + timeRise + '</section>' + '<br />' + '<section class="riseCont">' + 'Sunset: <br />' + timeSet);

        $('.wind').html(data.wind.speed + ' <small class="sm2">MPH</small>');

      });
    });
  }
});
