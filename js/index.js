$(window).ready(function() {

	/********************购物车********************/
	$("#spc").on("mouseenter", function() {
		$("#spc div").stop().slideDown(200);
	});

	$("#spc").on("mouseleave", function() {
		$("#spc div").stop().slideUp(200);
	});

	/********************logo中间导航********************/

	$(".search-c  li").on("mouseenter", function() {
		$(".like-shop").stop().slideDown(200);
		$(".lk-sp").eq($(this).index()).show().siblings("div").hide();
	});

	$(document).on("mouseleave", ".like-shop ul", ".search-c ul", function() {
		$(".like-shop").stop().slideUp(200);
	});

	$(".search-c ul li").last().off("mouseenter");
	$(".search-c ul li").eq($(".search-c ul li").length - 2).off("mouseenter");
	//	$(".search-c ul li").last().off("mouseleave");

	/********************左侧导航********************/
	$(".content-l li").on("mouseenter", function() {
		$(this).addClass("listyle").siblings("li").removeClass("listyle");
		$(".ca-list div").eq($(this).index()).show().siblings("div").hide();

	});

	$(".content,.ca-list div").on("mouseleave", function() {
		$(".content-l li").removeClass("listyle");
		$(".ca-list div").hide();

	});

	/********************搜索框按钮********************/
	$(".btn-search,.search-r i").on("mouseenter", function() {
		$(".btn-search").css("background", "#FF6700");
		$(".search-r i").addClass("sh-ihover");
	});

	$(".btn-search").on("mouseleave", function() {
		$(this).css("background", "#FFFFFF");
		$(".search-r i").removeClass("sh-ihover");
	});

	/********************轮播图部分********************/
	$(".content-r img").eq(0).show();
	showImg();

	$(".suqare li").on("mouseenter", function() {
		clear();
	});

	$(".content-r").on("mouseenter", function() {
		clear();
	});

	$(".suqare li").eq(0).addClass("lihover");

	$(".suqare li").on("click", function() {
		$(this).addClass("lihover").siblings("li").removeClass("lihover");
		$(".content-r img").eq($(this).index()).show().siblings("img").hide();
	});

	$(".arrow-l").on("mouseenter", function() {
		$(this).addClass("arrow-l-hover");
	});

	$(".arrow-l").on("mouseleave", function() {
		$(this).removeClass("arrow-l-hover");
	});

	$(".arrow-r").on("mouseenter", function() {
		$(this).addClass("arrow-r-hover");
	});

	$(".arrow-r").on("mouseleave", function() {
		$(this).removeClass("arrow-r-hover");
	});

	$(".arrow-r").on("click", function() {
		clear();
		bannerShow(true);
	});

	$(".arrow-l").on("click", function() {
		clear();
		bannerShow(false);
	});

	/********************明星单品界面********************/
	$(".shop-btn a").eq(0).on("click", function() {
		itemShow(true, this);
	});

	$(".shop-btn a").eq(1).on("click", function() {
		itemShow(false, this);
	});

	autoPlay();

	$(".shop-btn a").eq(0).on("click", function() {
		itemShow(true, this);
	});

	$(".shop-btn a").eq(1).on("click", function() {
		itemShow(false, this);
	});

	/********************List切换********************/
	listHide();

	
});
var timer = null;
var i = 0;

function clear() {
	clearInterval(timer);
}

function showImg() {
	clearInterval(timer);
	timer = setInterval(function() {
		bannerShow(true);
	}, 2000);
}

function bannerShow(flag) {
	//	var div = document.getElementsByClassName("content-r")[0];
	var div = document.getElementById("ct-r");
	var imgArr = div.children;

	if(flag) {
		i++;
		if(i < imgArr.length) {
			$(".content-r img").eq(i).show().siblings("img").hide();
			$(".suqare li").eq(i).addClass("lihover").siblings("li").removeClass("lihover");
		} else {
			i = 0;
			$(".content-r img").eq(i).show().siblings("img").hide();
			$(".suqare li").eq(i).addClass("lihover").siblings("li").removeClass("lihover");
		}
		//	console.log(i);
	} else {
		i--;
		if(Math.abs(i) < imgArr.length) {
			$(".content-r img").eq(Math.abs(i)).show().siblings("img").hide();
			$(".suqare li").eq(i).addClass("lihover").siblings("li").removeClass("lihover");
		} else {
			i = 0;
			$(".content-r img").eq(Math.abs(i)).show().siblings("img").hide();
			$(".suqare li").eq(i).addClass("lihover").siblings("li").removeClass("lihover");
		}
	}
	//	console.log(i);
}

function autoPlay() {
	var aL = document.getElementById("sp-item-l");
	var aR = document.getElementById("sp-item-r");
	var flag = true;
	timer = setInterval(function() {

		if(flag) {
			itemShow(true, aL);
			flag = false;
		} else {
			itemShow(false, aR);
			flag = true;
		}

	}, 5000);

}

function itemShow(flag, ele) {

	if(flag) {
		$(ele).siblings("a").addClass("sp-ahover").end().removeClass("sp-ahover");
		$(".shop-item ul").animate({ "margin-left": 0 }, 600);
	} else {
		$(ele).siblings("a").addClass("sp-ahover").end().removeClass("sp-ahover");
		var a = $(".shop-item ul").width() / 2;
		$(".shop-item ul").animate({ "margin-left": -a }, 600);

	}
}

function listHide() {
	var Arr = $(".none .item-r");
	//	var arr = jQuery.makeArray(Arr);
	//	console.log(Arr);
	//	console.log(arr);
	//	console.log(Arr.length);
	var brr = $(".shop-list");
	for(var i = 0; i <= Arr.length + 1; i++) {

		$(".item-r:eq(" + i + ") div").eq(0).show().siblings("div").hide();

		$(".shop-list:eq(" + i + ")").find("li").on("mouseenter", function() {

			//获取元素在数组中的下标
			//			console.log(brr.index($(this).parent().parent()));
			var index = brr.index($(this).parent().parent());
			$(this).siblings("li").removeClass("current").end().addClass("current");
			$(".none  .item-r:eq(" + index + ") div").eq($(this).index()).show().siblings("div").hide();

		});

	}
}