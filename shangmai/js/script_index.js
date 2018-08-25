window.onload = function() {
	var top = document.getElementById("top");
	window.onscroll = function() {
		if (getScrollTop()>60){
			top.style.display="block";
			top.style.position="absolute";
			top.style.top=getScrollTop()+"px";
		}else {
			top.style.display="block";
			top.style.position="absolute";
			top.style.top="0px";
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
	
	var navbar = document.getElementsByClassName("navbar");
	var navlist = document.getElementsByClassName("navlist");
	var m = 1;
	navbar[0].onclick=function(){	
		if (m==1){
			navlist[0].style.display="block";
			navbar[0].style.background="#BBBBBB";
			m = 0;
		} else{
			navlist[0].style.display="none";
			navbar[0].style.background="#FFFFFF";
			m = 1;
		}
	}
}