// JavaScript Document
$(function(){
			$(window).scroll(function(){
			   var sc=$(window).scrollTop();
			   if(sc>300){
				
				$(".fixed").css("display","block");
			   }else{
			   $(".fixed").css("display","none");
			   }
			 })
			$(".top").click(function(){
			   var sc=$(window).scrollTop();
			   $('body,html').animate({scrollTop:0},500);
			 })
			 
			 /*移动导航菜单*/
			 var t=0
			$("#glh-mobile-toggle").click(function(){
				if(t==0){
					$(".glh-hamburger").addClass("is-active");
					$(".glh-pageoverlay").attr("aria-hidden","false");
					$("#glh-mobile-toggle").attr("aria-expanded","true")
					$("#glh-mobile-dropdownnav").attr("aria-hidden","false");
					t=1	
				}
				else{
					$(".glh-hamburger").removeClass("is-active");
					$(".glh-pageoverlay").attr("aria-hidden","true");
					$("#glh-mobile-toggle").attr("aria-expanded","false")
					$("#glh-mobile-dropdownnav").attr("aria-hidden","true");
					t=0
				}
				
			});
			
			$(".glh-mobile .glh-categories>li").click(function(){
				$(this).parents(".glh-dropdownnav").siblings(".glh-corenav").find(".glh-hamburger").removeClass("is-active");
				$(this).parents(".glh-mobile").siblings(".glh-pageoverlay").attr("aria-hidden","true");
				$(this).parents(".glh-dropdownnav").siblings(".glh-corenav").find(".glh-toggle").attr("aria-expanded","false");
				$(this).parents(".glh-dropdownnav").attr("aria-hidden","true");
				t=0;
			});
			$(".glh-desktop .glh-categories li a").click(function(){
				$(this).parent().siblings().find("a").attr("aria-expanded","false")
				$(this).attr("aria-expanded","true");
			});

		});