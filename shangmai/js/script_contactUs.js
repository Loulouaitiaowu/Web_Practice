window.onload = function() {
	var top = document.getElementById("top");
	window.onscroll = function() {
		if (getScrollTop() > 60) {
			top.style.display = "block";
			top.style.position = "relative";
			top.style.top = getScrollTop() + "px";
		} else {
			top.style.display = "block";
			top.style.position = "relative";
			top.style.top = "0px";
		}
	}

	function getScrollTop() {
		var scrollTop = 0;

		//兼容ie和火狐浏览器
		if (document.documentElement && document.documentElement.scrollTop) {
			scrollTop = document.documentElement.scrollTop;
		} else if (document.body) {
			scrollTop = document.body.scrollTop;
		}

		return scrollTop;
	}
}