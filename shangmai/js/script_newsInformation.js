window.onload = function() {
	var top = document.getElementById("top");
	window.onscroll = function() {
		if (getScrollTop() > 60) {
			top.style.display = "block";
			top.style.position = "absolute";
			top.style.top = getScrollTop() + "px";
		} else {
			top.style.display = "block";
			top.style.position = "absolute";
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

	//获取a标签
	var a = document.getElementById("box").getElementsByTagName("a");
	//获取类为tabsub的标签
	var items = document.getElementsByClassName("tabsub");
	for (var i = 0; i < a.length; i++) {
		a[i].id = i;
		//给a标签绑定事件
		a[i].onclick = function() {
			for (var i = 0; i < a.length; i++) {
				a[i].style.border = "none";
				a[i].style.background = "none";
			}
			this.style.border = "solid 1px #CCCCCC";
			this.style.borderBottom = "none";
			this.style.background = "#FFFFFF";
			for (var i = 0; i < items.length; i++) {
				items[i].style.display = "none";
			}
			items[this.id].style.display = "block";
		}
	}
}