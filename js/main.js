
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

    var currentLanguage = 'zh';    

    $('#aLang').on('click', function () {
      console.log('lang');

      if (currentLanguage === 'zh') {
        currentLanguage = 'en';
        updateText('en');
      } else {
        currentLanguage = 'zh';
        updateText('zh');
      }

    });

    var updateText = function (lang) {
      if (lang === 'zh') {
        $('#aHome').text('主頁');
        $('#aAbout').text('關於我們');
        $('#aServices').text('服務');
        $('#aStats').text('數據');
        $('#aTeam').text('團隊');
        $('#aContact').text('聯絡我們');
        $('#aLang').text('English');
        $('#aLearnMore').text('知道更多');
        $('#h2About').text('關於我們');
        $('#h4WhoWeAre').text('我們是誰');
        $('#pWhoWeAre').text('我們是一個由Louis新創的團隊，專注在行銷跟廣告');
        $('#h4WhatWeDo').text('我們做什麼');
        $('#pWhatWeDo').text('我們研發了一到廣告軟體系統，這套管理系統讓我們可以用非常低的成本達到比市面上的廣告更好的廣告效果');
        $('#h4WhyChooseUs').text('為何選擇我們');
        $('#pWhyChooseUs').text('如上面所說的，我們開發的軟體可以讓客戶已非常非常低的成本達到非常高的曝光量，我們會是您最好的選擇');
        $('#h2OurServices').text('我們的服務');
        $('#h4WebDevelopment').text('網頁開發');
        $('#h4AppDevelopment').text('App 開發');
        $('#h4Analystics').text('資料分析');
        $('#h4Marketing').text('行銷規劃');
        $('#h4eCommerce').text('網路行銷');
        $('#h4ContentDevelopment').text('內容開發');
        $('#h4Branding').text('品牌形象');
        $('#h4VP').text('影片與照片');
        $('#pWebDevelopment').text('我們可以替客戶打造專屬的拍賣官方網站，提供使用者絕佳的消費體驗．');
        $('#pAppDevelopment').text('我們可以替客戶打造專屬的拍賣官方ＡＰＰ，提供使用者絕佳的消費體驗．');
        $('#pAnalystics').text('我們可以替客戶分析他們所獲得的資料，讓客戶更暸解使用者，以增加更多利潤．');
        $('#pMarketing').text('我們可以替客戶在網路上行銷他們的產品，增加客戶的銷售量，賣出比原本更多的商品．');
        $('#peCommerce').text('我們可以整合現在市場上各大消費平台，提供更多的消費方式，讓消費更佳easy．');
        $('#pContentDevelopment').text('我們可以替客戶開發產品的內容，內容會根據產品的種類和樣式有所不同．');
        $('#pBranding').text('我們可以替客戶打造一個成功並且曝光量極高的品牌．');
        $('#pVP').text('我們可以替客戶重新拍攝照片或者影片．');
        $('#h2Statistic').text('統計數據');
        $('#h4Impressions').text('曝光次數');
        $('#pImpressions').text('所有貼文被查看的次數，從我們的統計數既顯示可以看出，曝光次數因為使用了我們的軟體成長的速度非常的快．');
        $('#h4Reaches').text('觸及人數');
        $('#pReaches').text('看過任何一則貼文的不重複帳號數量，從我們的統計數既顯示可以看出，觸及人數因為使用了我們的軟體成長的速度非常的快．');
        $('#h4ProfileViews').text('個人檔案瀏覽次數');
        $('#pProfileViews').text('專頁檔案被瀏覽的次數，從我們的統計數既顯示可以看出，個人檔案瀏覽次數因為使用了我們的軟體成長的速度非常的快．');
        $('#h2Team').text('團隊成員');
        $('#h2Contact').text('聯絡我們');
        $('#h4ContactInfo').text('聯絡資訊');
        $('#h4LeaveMessage').text('留下訊息');
        $('#btnSend').text('送出訊息');
      } else {
        $('#aHome').text('Home');
        $('#aAbout').text('About');
        $('#aServices').text('Services');
        $('#aStats').text('Statistics');
        $('#aTeam').text('Team');
        $('#aContact').text('Contact');
        $('#aLang').text('中文');
        $('#aLearnMore').text('Learn More');
        $('#h2About').text('About Us');
        $('#h4WhoWeAre').text('Who We Are');
        $('#pWhoWeAre').text('We are a team newly founded by Louis, and we are focusing on Marketing and Advertising.');
        $('#h4WhatWeDo').text('What We Do');
        $('#pWhatWeDo').text('We developed a marketing advertising software system which leads to much more advertising benifit the other advertising method, and the cost of this is very low.');
        $('#h4WhyChooseUs').text('Why Choose Us');
        $('#pWhyChooseUs').text('As described, the  we developed can produce a very large amount of exposure of your product at a very low price, we\'re the best choice.');
        $('#h2OurServices').text('Our Services');
        $('#h4WebDevelopment').text('Web Development');
        $('#h4AppDevelopment').text('App Development');
        $('#h4Analystics').text('Analystics');
        $('#h4Marketing').text('Marketing');
        $('#h4eCommerce').text('eCommerce');
        $('#h4ContentDevelopment').text('Content Development');
        $('#h4Branding').text('Branding');
        $('#h4VP').text('Video & Photography');
        $('#pWebDevelopment').text('We develop shopping website for our customers to let their customers have the greatest shopping experience using computer.');
        $('#pAppDevelopment').text('We develop shopping app for Android an IOS for our customers to let their customers have the greatest shopping experience using app.');
        $('#pAnalystics').text('We can help our customer analyze their data and make the best profit.');
        $('#pMarketing').text('We use our advertising software system to form a best marketing strategy.');
        $('#peCommerce').text('We integerate most popular shopping method for our customer to make shopping easier.');
        $('#pContentDevelopment').text('We develop the content of products the customers gave us.');
        $('#pBranding').text('We help our customers build a successful and maximum exposure brand which leads to success.');
        $('#pVP').text('We can re-shoot the photo and video for our customer.');
        $('#h2Statistic').text('Statistics');
        $('#h4Impressions').text('Impressions');
        $('#pImpressions').text('The total number of times all of your posts have been seen. From the statistic graph you can the impression number is growing very fast using our advertising software system.');
        $('#h4Reaches').text('Reaches');
        $('#pReaches').text('The number of unique accounts that have seen any of your posts. From the statistic graph you can the reaches number is growing very fast using our advertising software system.');
        $('#h4ProfileViews').text('Profile Views');
        $('#pProfileViews').text('The number of time your profile was viewed. From the statistic graph you can the profile view number is growing very fast using our advertising software system.');
        $('#h2Team').text('Meet the Team');
        $('#h2Contact').text('Contact Us');
        $('#h4ContactInfo').text('Contact info');
        $('#h4LeaveMessage').text('Leave us a message');
        $('#btnSend').text('Send Message');
      }
    };    


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