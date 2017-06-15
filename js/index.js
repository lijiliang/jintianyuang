$(document).ready(function(e) {
        $('.p_pop').hover(function(){
			$(this).children('.s_pop').show()},function(){
				$(this).children('.s_pop').hide();
			});
			
		$('#nav li').hover(function(){
			$(this).addClass('hover')},function(){
			$(this).removeClass('hover')
            });

		$('.i_login_login').hover(function(){
			$(this).addClass('i_login_loginh')},function(){
				$(this).removeClass('i_login_loginh');
			});
		$('.i_login_reg').hover(function(){
			$(this).addClass('i_login_regh')},function(){
				$(this).removeClass('i_login_regh');
			});

		$('.qlogin').hover(function(){
			$(this).addClass('qloginh')},function(){
				$(this).removeClass('qloginh');
			});
		$('.fav').hover(function(){
			$(this).addClass('favh')},function(){
				$(this).removeClass('favh');
			});
		$('.sethome').hover(function(){
			$(this).addClass('sethomeh')},function(){
				$(this).removeClass('sethomeh');
			});
		$('.addfav').hover(function(){
			$(this).addClass('addfavh')},function(){
				$(this).removeClass('addfavh');
			});
		$('.topservice').hover(function(){
			$(this).addClass('topserviceh')},function(){
				$(this).removeClass('topserviceh');
			});
		$('.zhongzi').hover(function(){
			$(this).addClass('zhongzih')},function(){
				$(this).removeClass('zhongzih');
			});
		$('.topusercenter').hover(function(){
			$(this).addClass('topusercenterh')},function(){
				$(this).removeClass('topusercenterh');
			});
		$('.s_aboutgame').hover(function(){
			$(this).addClass('s_aboutgameh')},function(){
				$(this).removeClass('s_aboutgameh');
			});
		$('.s_chongji').hover(function(){
			$(this).addClass('s_chongjih')},function(){
				$(this).removeClass('s_chongjih');
			});
		$('.s_getbackey').hover(function(){
			$(this).addClass('s_getbackeyh')},function(){
				$(this).removeClass('s_getbackeyh');
			});
		$('.s_tousu').hover(function(){
			$(this).addClass('s_tousuh')},function(){
				$(this).removeClass('s_tousuh');
			});

		


		$(".newservice_main .con:eq(1)").hide();
		$(".newservice h2 span:eq(0)").addClass("hover");
		var xuanxiang=$(".newservice h2 span");
		xuanxiang.hover(function(){
		$(this).addClass("hover")
		$(this).siblings().removeClass();

		$(".con").eq(xuanxiang.index(this)).show()
		$(".con").eq(xuanxiang.index(this)).siblings().hide();
		});
		
		//table color
		$(".servicelist>dl:odd").addClass("even");
		$(".servicelist>dl:even").addClass("odd")
		
		//$(".tablecolor dl").addClass("bbr")
		$(".servicelist dd").addClass("btl");
		$('.servicelist dl').find("dd:eq(0)").addClass('suctd');
		$('.tablecolor dl:eq(0) dd').addClass('notopboder');
		
		//hotgame
		
		$('.hotgameli').hover(function(){
				$(this).children('.hotgamedetails,.hotgamedetails_main').stop().slideToggle().show('fast')},function(){
					$(this).children('.hotgamedetails,.hotgamedetails_main').stop().slideToggle().hide('fast');
			});
			
		$('.hotgamedetails_enter').hover(function(){
			$(this).addClass('hotgamedetails_enterh')},function(){
				$(this).removeClass('hotgamedetails_enterh');
			});
			
		$('.hotgamedetails_start').hover(function(){
			$(this).addClass('hotgamedetails_starth')},function(){
				$(this).removeClass('hotgamedetails_starth');
			});
			
		var ww = $(window).width()
        if(ww < 1210){
			$('.adleft,.adright').hide();
		};

	$(".addfav").click(function () {　　　　//$里面是链接的id  

	    var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL';  

	    if (document.all) {  

		window.external.addFavorite('http://www.zwwan.com', '找我玩游戏平台')  

	    } else if (window.sidebar) {  

		window.sidebar.addPanel('找我玩游戏平台', 'http://www.zwwan.com', "")  

	    } else {　　　　//添加收藏的快捷键  

		alert('添加失败\n您可以尝试通过快捷键' + ctrl + ' + D 加入到收藏夹~')  

	    }  

	});

		$(".sethome").click(function () {  
		
				if (document.all) {
		
				document.body.style.behavior = 'url(#default#homepage)';  
		
				document.body.setHomePage(document.URL);  
		
				} else {  
				alert("设置首页失败，请手动设置！");  
				}  
		});
		
});

var t=n=nextwidth=0;
function showauto(){
	n=n>=3? 0:++n;
	$("#slideon li").eq(n).trigger('click');
	}
	$(document).ready(function(){
	$("#slideon li").click(function(){
	var i=$(this).text()-1;
	n=i;
	nextwidth=n*710;
	$("#imgli ul").animate({marginLeft:-nextwidth},200);
	$(this).addClass("on").siblings().removeClass("on");
	});
	t=setInterval("showauto()",3000);
	$("#slide").hover(function(){clearInterval(t);$("#slideon2").show();},function(){t=setInterval("showauto()",3000);$("#slideon2").hide();});//榧犳爣绉诲叆鏄仠姝㈠惊鐜紝绉婚櫎鍚庣户缁惊鐜�
	$(".pre").click(function(){
	n=n-1;
	nextwidth=n*710;
	if(n>=0){
	$("#imgli ul").animate({marginLeft:-nextwidth},200);
	$("#slideon li").eq(n).addClass("on").siblings().removeClass("on");
	}else
	{n=3;
	nextwidth=n*710;
	$("#imgli ul").animate({marginLeft:-nextwidth},200);
	$("#slideon li").eq(n).addClass("on").siblings().removeClass("on");
	}
	});
	$(".next").click(function(){
	n=n+1;
	nextwidth=n*710;
	if(n<=3){
	$("#imgli ul").animate({marginLeft:-nextwidth},200);
	$("#slideon li").eq(n).addClass("on").siblings().removeClass("on");
	}else
	{n=0;
	nextwidth=n*710;
	$("#imgli ul").animate({marginLeft:-nextwidth},200);
	$("#slideon li").eq(n).addClass("on").siblings().removeClass("on");
	}
	});
	if(location.href.indexOf('828qp.com') > 1){
		$('.footer .guanyu:last').html('ICP备案号：<a href="http://www.miitbeian.gov.cn/" target="_blank" style="color:#999;">粤ICP备15111334号</a>&nbsp;&nbsp;&nbsp;&nbsp;广东开泓信息科技有限公司');
	}
	if(location.href.indexOf('727qp.com') > 1){
		$('.footer .guanyu:last').html('ICP备案号：<a href="http://www.miitbeian.gov.cn/" target="_blank" style="color:#999;">粤ICP备15111334号</a>&nbsp;&nbsp;&nbsp;&nbsp;广东开泓信息科技有限公司');
	}
});
