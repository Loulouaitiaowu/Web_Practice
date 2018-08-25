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

	var a = document.getElementById("jobs").getElementsByTagName("a");
	var items = document.getElementsByClassName("jobsinfo");

	for (var i = 0; i < a.length; i++) {
		a[i].id = i;
		//给a标签绑定事件
		a[i].onclick = function() {
			for (var i = 0; i < a.length; i++) {
				a[i].style.color = "#1E90FF";
				a[i].style.background = "#FFFFFF";
			}
			this.style.background = "#1E90FF";
			this.style.color = "#FFFFFF";
			for (var i = 0; i < items.length; i++) {
				items[i].style.display = "none";
			}
			items[this.id].style.display = "block";
		}
	}

	var exit = document.getElementById("exit");
	var showDialogBg = document.getElementById("showDialogBg");
	var sub = document.getElementById("submit");
	var bt = document.getElementById("bt");
	var info = document.getElementById("peopleinfo");
	var chacha = document.getElementById("chacha");
	var swidth = document.documentElement.clientWidth;
	var sheight = document.documentElement.clientHeight;

	bt.onclick = function() {
		document.body.style.overflow="hidden";
		showDialogBg.style.display = "block";
		showDialogBg.style.height = sheight + "px";

		info.style.display = "block";
		info.style.top = (sheight - info.offsetHeight) / 2 + "px";
		info.style.left = (swidth - info.offsetWidth) / 2 + "px";

	}
	
	chacha.onclick=function(){
		info.style.display = "none";
		showDialogBg.style.display = "none";
		document.body.style.overflow="auto";
		
	}
	
	
}