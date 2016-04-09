
$(document).ready(function(){
  ///  $("form.jqtransform").jqTransform();
    // ieCheck
    var ie = false;
    var aniButtonDuration = 350;
    
    /*
    if($.browser.msie && $.browser.version<9){
        aniButtonDuration = 0;
        ie = true;
    }*/

    //resize
    /*
   	var mainDIV = $('.main');
    $(window).resize(function()
    {
       resizeContent(500); 
    });
    
    function resizeContent(_animationSpeed){
        var window_H = $(window).height();
        var mainDIV_H = 650;
        var mTop;
        var mLeft;
         
        if (window_H > mainDIV_H) {
			mTop = ~~((window_H - mainDIV_H)/2);	
		} else {
			mTop = 0;
		}
        
       var window_W = $(window).width();
       var mainDIV_W = 1020;
       var leftOffset = ~~((window_W - mainDIV_W)/2);
         
       if (window_W > mainDIV_W) {
            if(leftOffset < 130){
	           mLeft = leftOffset;
            } else {
               mLeft = 130;
            }	
       } else {
	       mLeft = 0;	
	   }
       mainDIV.stop().animate({marginTop:mTop, marginLeft:mLeft}, _animationSpeed, 'easeOutCubic');
    }
    
    resizeContent(0);
    
    // bg 
    $('#bgStretch').bgStretch({
        align:'rightTop'
    })
    
    $('.formButton .button, .linkButton').sprites({
		method:'gStretch',
        easing:'easeOutCubic',
		hover:true
	}) 
    $('#icon1, #icon2, #icon3, #icon4, .link2').sprites({
		method:'simple',
		duration:400,
		easing:'easeOutQuint',
		hover:true
	})
    */
	/////////////////////////////////////////////////////////////////////////// 
    //                           content switch                              //
    ///////////////////////////////////////////////////////////////////////////
    
    var content=$('#content-container'),
        nav=$('#navigation'),
        pages = $('#content-container > ul'),
        splash = $('#splash');
        
    nav.navs({
		useHash:true,
        defHash:'#!/',
        defFunc:function(li){
            if(ie){
                $('a span',li).css({display:'none'})
            } else {
                $('a span',li).stop().animate({scale:0},0);
            }        
        },   
		hoverIn:function(li){
		    if(ie){
		   	      $('a span',li).css({display:'block'})
            } else {
		   	     $('>a span',li).stop().animate({scale:1},aniButtonDuration/1.5, 'easeOutBack');
            }
            $('> a',li).stop().animate({color:'#38c0e7'},aniButtonDuration/1.5, 'easeOutCubic');                        
		},
		hoverOut:function(li){
		    if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
                 if(ie){		      
                     $('a span',li).css({display:'none'})
                 } else{
                    $('>a span',li).stop().animate({scale:0},aniButtonDuration/2, 'easeInCubic');
                                     
                   }                    
               $('> a',li).stop().animate({color:'#5a5a55'},aniButtonDuration/2, 'easeInCubic');
			}
		}				
    })	
    
  //  var firstApp = false;
    
    content.tabs({
		preFu:function(_)
        {
           	pages.css({display:'none'});
            _.li.css({display:'none'});
		}
		,actFu:function(_)
        {
            aniDelay = 600;
            /*
            if(_.n == -1 && _.pren != -1){
                if(firstApp){
                    splash.css({display:'block', left:getOutside()}).stop().delay(470).animate({left:'0px'}, 800, 'easeOutBack');
                } else {
                    splash.css({display:'block', left:getOutside()}).stop().animate({left:'0px'}, 1200, 'easeInOutQuint');
                }
                pages.stop().animate({left:getOutside()}, 500, 'easeInCubic', function(){
                     _.li.css({display:'none'});
                     pages.css({display:'none'});
                });
            }
            */
            if(_.pren == undefined){
                _.pren = -1;
            }
            
            if(_.n > -1 && _.pren == -1){
                splash.stop().animate({left:getOutside()}, 500, 'easeInCubic', function(){
                    $(this).css({display:'none'});
                });
                pages.css({display:'block', left:getOutside()}).stop().delay(370).animate({left:'0px'}, 800, 'easeOutBack')
            }
            
            
            if(_.n > -1){
    			if(_.curr){
    				_.curr
    					.stop()
    					.delay(aniDelay).css({display:'block',left:getOutside()}).animate({left:'0px'}, 800,'easeOutBack');
                }
    			if(_.prev){		  
    				_.prev
    					.stop()
    					.animate({left:getOutside()}, 500,'easeInCubic', function(){
    					     $(this).css({display:'none'});
    					})
                }
            }
            
            firstApp = true;
		}
	})
       
    nav.navs(function(n, _){
		content.tabs(n);
	})
    
    function getOutside(){
        var windowW = $(window).width();
        var outsideCor;
        
        if(windowW > 1020){
            outsideCor = 1020 + 130;
        } else {
            outsideCor = 1020
        }
        return -outsideCor;
    }

    /* Navigation Flyout */
    $('#navigation ul li').hover (
    function () {
        $(this).removeClass ('nested-nav-show');
        $(this).find ('div').addClass ('nested-nav-show');
   }, 
   function () {
        $(this).find ('div').removeClass ('nested-nav-show');
    });
	 
})


