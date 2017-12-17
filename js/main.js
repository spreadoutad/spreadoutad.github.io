
function main() {

(function () {
   'use strict';

   var transparentize = function(color, opacity) {
      var alpha = opacity === undefined ? 0.5 : 1 - opacity;
      return Color(color).alpha(alpha).rgbString();
    }

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })


  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });


        var ctx1 = document.getElementById("chart1");     
        var ctx2 = document.getElementById("chart2");   
        var ctx3 = document.getElementById("chart3"); 

        var options = {
          maintainAspectRatio: false,
          spanGaps: false,
          elements: {
            line: {
              tension: 0.000001
            }
          },
          plugins: {
            filler: {
              propagate: false
            }
          },
          scales: {
            xAxes: [{
              ticks: {
                autoSkip: false,
                maxRotation: 0
              }
            }]
          }
        };   

        new Chart(ctx1, {
          type: 'line',
          data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
            datasets: [{
              backgroundColor: transparentize('rgb(75, 192, 192)'),
              borderColor: 'rgb(75, 192, 192)',
              data:  [0, 85, 594, 909, 1336, 1883, 2355],
              label: 'Impressions',
              fill: 'start'
            }]
          },
          options: Chart.helpers.merge(options, {
            title: {
              text: 'Impressions',
              display: true
            }
          })
        });    

        new Chart(ctx2, {
          type: 'line',
          data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
            datasets: [{
              backgroundColor: transparentize('rgb(255, 159, 64)'),
              borderColor: 'rgb(255, 159, 64)',
              data:  [0, 29, 186, 276, 423, 589, 753],
              label: 'Reaches',
              fill: 'start'
            }]
          },
          options: Chart.helpers.merge(options, {
            title: {
              text: 'Reaches',
              display: true
            }
          })
        });  

        new Chart(ctx3, {
          type: 'line',
          data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
            datasets: [{
              backgroundColor: transparentize('rgb(255, 99, 132)'),
              borderColor: 'rgb(255, 99, 132)',
              data:  [0, 52, 540, 788, 1173, 1628, 2072],
              label: 'Profile Views',
              fill: 'start'
            }]
          },
          options: Chart.helpers.merge(options, {
            title: {
              text: 'Profile Views',
              display: true
            }
          })
        });      

    });

  	/*====================================
    Pretty Photo
    ======================================*/
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	

}());


}
main();