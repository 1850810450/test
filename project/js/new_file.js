//弹出框
function art() {
	
	var oLis = getClass(document,'li')						//根据class获取元素
	var oMn=getClass(document,'mn')
	var oIcon =getClass(document,'sh')
	
	for(var i=0;i<oLis.length;i++){					
		oLis[i].index=i
			oLis[i].onclick=function(ev){				
				var ev= ev||window.event				
			for(var i=0;i<oLis.length;i++){					//清除样式
				oMn[i].style.display="none"
				oIcon[i].style.backgroundPositionX=-56+'px'
				ev.cancelBubble = true		
			}
			oMn[this.index].style.display='block'		
			oIcon[this.index].style.backgroundPositionX=-42+'px'	
			}				
			document.body.onclick=function(ev){				//点击其他地方	关闭弹出框
				var ev= ev||window.event
				for( var i=0;i<oLis.length;i++){
					oMn[i].style.display="none"
					oIcon[i].style.backgroundPositionX=-56+'px'
				}
			}		
	}
	}
art()


//banner 轮播
function play() {
	var oBann = document.getElementById("bann");
	var oLi = oBann.getElementsByTagName("li")

	var oBtn = document.getElementById("btns")
	var oLis = oBtn.getElementsByTagName("li")
	var timer = null
	var iNum = 0
	oBann.innerHTML += oBann.innerHTML
	oBann.style.width = oLi[0].offsetWidth * oLi.length + 'px'

	//定时器
	function pl() {
		timer = setInterval(function() {
			iNum++
			if(iNum == oLi.length / 2 + 1) {
				oBann.style.left = 0 + 'px'
				iNum = 1
			}
			for(var i = 0; i < oLis.length; i++) {
				oLis[i].className = ""
			}
			if(iNum == oLi.length / 2) {
				oLis[0].className = 'bl'
			} else {
				oLis[iNum].className = 'bl'
			}
			animate(oBann, {
				"left": -oLi[0].offsetWidth * iNum
			})
		}, 3000)
	}
	pl()

	for(var i = 0; i < oLis.length; i++) { 							//点击切换按钮和图片
		oLis[i].index = i
		oLis[i].onclick = function() {
			clearInterval(timer)
			for(var i = 0; i < oLis.length; i++) {
				oLis[i].className = ""
			}
			oLis[this.index].className = "bl"
			iNum = this.index
			animate(oBann, {
				"left": -oLi[0].offsetWidth * this.index			//每次移动一个图片的距离
			})
		}
	}

	oBann.onmouseover = oBtn.onmouseover = function() {
		clearInterval(timer)
	}
	oBann.onmouseout = oBtn.onmouseout = function() {
		pl()
	}

}

play()

//左侧菜单栏显现与隐藏

function left() {
	var oLeft = document.getElementById("left")
	var oDl = oLeft.getElementsByTagName("dl")
	var oBl =getClass(document,'block')

	for(var i = 0; i < oDl.length; i++) {
		oDl[i].index = i
		oDl[i].onmouseover = function() {
			for(var i = 0; i < oDl.length; i++){
					oBl[i].style.display="none"
			}
			
			if(this.index!=5){
				oBl[this.index].style.display="block"
				oDl[this.index].style.color="#555555"
				oDl[this.index].style.background="#FFFFFF"
				
			}else{
				oDl[this.index].style.color="#555555"
				oDl[this.index].style.background="#FFFFFF"
				oBl[this.index].style.display="block"
				oBl[this.index].style.top=-20+'px'
			}
	}
		
		oDl[i].onmouseout=function(){
			oBl[this.index].style.display="none"
			oDl[this.index].style.color="#FFFFFF"
			oDl[this.index].style.background="#6cc9ff"
		}
		}
	}

left()
//选项卡
function Tab() {

	var oTit = document.getElementById("tt")
	var oA = oTit.getElementsByTagName("a")

	var oList = document.getElementById("list")
	var oLi1 = document.getElementById('li1')
	var oLi2 = document.getElementById('li2')

	oLi1.style.display = "block"
	for(var i = 0; i < oA.length; i++) {
		oA[i].index = i
		oA[i].onclick = function() {
			for(var i = 0; i < oA.length; i++) {
				oA[i].className = ""
			}
			if(this.index % 2 == 0) { 						//取膜  来判断哪个选项显现  哪个隐藏
				oLi1.style.display = "block"
				oLi2.style.display = "none"
			} else {
				oLi1.style.display = "none"
				oLi2.style.display = "block"
			}
			oA[this.index].className = "avtive" 			//选项卡当前按钮执行active里的样式
		}

	}

}

Tab()

//鼠标滚动

function back() {
	var oBtn = document.getElementById("back")
	var oNav = document.getElementById("navs")
	var oTop = 0;
	var timer = null;
	var off = true

	window.onscroll = function() {
		oTop = document.documentElement.scrollTop || document.body.scrollTop //获取滚动条的高度
		if(oTop > 160) {
			oNav.style.display = "block"
		} else {
			oNav.style.display = "none"
		}

		if(oTop > 500) { 							//滚动条高度大于500时  出现返回顶部按钮
			oBtn.style.display = "block"
		} else {
			oBtn.style.display = "none"
		}
		if(off != true) {
			clearInterval(timer) 					//运动过程中	再次触发滚动条事件时 清除定时器  滚动事件停止
		}
		off = false
	}

	oBtn.onclick = function() {
		timer = setInterval(function() {
			var speed = Math.floor(oTop / 6)
			if(speed == 0) {
				clearInterval(timer)
			} else {
				if(document.documentElement.scrollTop) {
					document.documentElement.scrollTop -= speed
				} else {
					document.body.scrollTop -= speed
				}
				off = true
			}
		}, 30)

	}

}

back()

//无缝滚动
function picplay() {
	var oBox = document.getElementById("picbox")
	var oMenu = document.getElementById("picplay")
	var oLis = oMenu.getElementsByTagName("li")
	var oLeft = document.getElementById("last")
	var oRight = document.getElementById("next")
	var timer = null

	oMenu.innerHTML += oMenu.innerHTML
	oMenu.style.width = oLis[0].offsetWidth * oLis.length + 'px'

	oBox.onmouseover = function() {
		oLeft.style.display = "block"
		oRight.style.display = "block"
	}
	oBox.onmouseout = function() {
		oLeft.style.display = "none"
		oRight.style.display = "none"
	}

	oLeft.onclick = function() {					 //左右点击按钮控制滚动方向
		clearInterval(timer)
		start()
	}

	oRight.onclick = function() {
		clearInterval(timer)

		timer = setInterval(function() {

			if(oMenu.offsetLeft < -oMenu.offsetWidth / 2) {
				oMenu.style.left = 0
			} else if(oMenu.offsetLeft > 0) {
				oMenu.style.left = -oMenu.offsetWidth / 2 + 'px'
			}
			oMenu.style.left = oMenu.offsetLeft + 1 + 'px'

		}, 20)
	}

	function start() {											//开始实行无缝滚动
		timer = setInterval(function() {

			if(oMenu.offsetLeft < -oMenu.offsetWidth / 2) {
				oMenu.style.left = 0
			} else if(oMenu.offsetLeft > 0) {
				oMenu.style.left = -oMenu.offsetWidth / 2 + 'px'
			}
			oMenu.style.left = oMenu.offsetLeft - 1 + 'px'

		}, 20)
	}
	start()

}

picplay()

//获取class
function getClass(parent,name){
	var oParent = parent || document;
	var aEles = oParent.getElementsByTagName("*");
	var result=[];
	for(var i=0; i<aEles.length;i++){
		var arr= aEles[i].className.split(' ');
		for(var j=0; j<arr.length;j++){
			if(arr[j]==name){
				result.push(aEles[i])
			}						
		}
	};
	return result;
}