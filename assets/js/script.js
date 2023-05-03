$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度

	//----------------gotop功能-----------------
	$(".gotop").click(function () {
		$("html,body").animate({ scrollTop: 0 }, 300);
		return false;
	})

	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) { //若目前的位置距離網頁頂端>...
			$(".gotop").addClass("show");
			$(".js-nav").addClass("up");
		} else {
			$(".gotop").removeClass("show");
			$(".js-nav").removeClass("up");
		}
	});
	//banner 設定
	RESIZE();

	function RESIZE() {
		var WINDOW = $(window).width();
		var WINDOWH = $(window).height();

		if (WINDOW < 768) {
		}
	}
	$(window).resize(function () {
		RESIZE();
	})

	//messenger樣式
	$(function () {
		$('.fb_dialog_content iframe').load(function () {
			var $iframe = $(this),
				$contents = $iframe.contents();

			// 取得 iframe 中的元素
			$('#btn1').click(function () {
				alert($contents.find('#t1').val());
			});
			// 執行各種動作時可以再判斷 $contents 是否為 null
		});
	});


})//JS尾端	

