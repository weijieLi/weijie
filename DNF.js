window.onload=function(){
 var  pic=document.getElementById('pic'),
	  oPli=pic.getElementsByTagName('li'),
      list=document.getElementById('list').getElementsByTagName('a');
		
	
		for(i=0;i<list.length;i++){
			list[i].index=i;
			list[i].onmouseover=function(){
				for(j=0;j<list.length;j++){
					list[j].style.backgroundColor="";
					oPli[j].style.display='none'
					}
				this.style.backgroundColor='#ec4828'
				oPli[this.index].style.display='block';
			}
		}
		
		
	
	
//新闻公告滑过切换
var lunbo=function(){
	var oTab=document.getElementById('new-title');
	var oLi=oTab.getElementsByTagName('li');
	var oCon=document.getElementById('oo');
	var divs=oCon.getElementsByTagName('ul');
	for(i=0;i<oLi.length;i++){
		oLi[i].index=i;
		oLi[i].onmouseover=function(){
			for(var j=0;j<oLi.length;j++){
			
				divs[j].className='hide';
				
			}

			divs[this.index].className='xinwen show';
		
		}
	}
}
lunbo();




var menu=function(){
	var oTab=document.getElementById('menu-tit');
	var oLi=oTab.getElementsByTagName('li');
	var divs=document.getElementsByClassName('menu-list-panel');
	timer=null;
	for(i=0;i<oLi.length;i++){
		oLi[i].index=i;
		oLi[i].onmouseover=function(){
			divs[this.index].className='menu-list-panel show';		
		}
		oLi[i].onmouseout=function(){
			//timer=setTimeout(function(){
			divs[this.index].className='menu-list-panel hide'
			
			//})
		}
	  }
	}
menu();


var aClick=function(){
	var oTab=document.getElementById('act-nav');
	var oLi=oTab.getElementsByTagName('li');
	var oCon=document.getElementsByClassName('act-list');


		for(i=0;i<oLi.length;i++){
			oLi[i].index=i;
			oLi[i].onclick=function(){
				for(var j=0;j<oLi.length;j++){
					oLi[j].className=''
					oCon[j].className='act-list hide';
					
				}
				oLi[this.index].className='on'
				oCon[this.index].className='act-list show';
				
			}
		}
	
	}
aClick();

var showTime=function(){
	 var endtime=new Date("2016/11/6,0:0:0");
	 var nowtime=new Date();
	 var lefttime=parseInt((endtime.getTime()-nowtime.getTime())/1000);
	 var d1=parseInt(lefttime/(24*60*60));
	 document.getElementById('daoshu').innerHTML=d1+"天后结束"
	 
	 }
showTime();


var video=function(){
	var oTab=document.getElementById('video-nav');
	var oLi=oTab.getElementsByTagName('li');
	var oCon=document.getElementById('video-bd');
	var vLi=oCon.getElementsByTagName('ul')


		for(i=0;i<oLi.length;i++){
			oLi[i].index=i;
			oLi[i].onclick=function(){
				for(var j=0;j<oLi.length;j++){
					oLi[j].className=''
					vLi[j].className='hide';
					
				}
				oLi[this.index].className='on'
				vLi[this.index].className='show';
				
			}
		}
	
	}
video();



var xiaoshuo=function(){
	var oTab=document.getElementById('xsli');
	var oLi=oTab.getElementsByTagName('li');
	//var oCon=document.getElementById('video-bd');
	//var vLi=oCon.getElementsByTagName('ul')
	var vLi=document.getElementsByClassName('novel-bd');


		for(i=0;i<oLi.length;i++){
			oLi[i].index=i;
			oLi[i].onmouseover=function(){
				for(var j=0;j<oLi.length;j++){
					oLi[j].className=''
					vLi[j].className='novel-bd hide';
					
				}
				oLi[this.index].className='nov-on'
				vLi[this.index].className='novel-bd';
				
			}
		}
	
	}
xiaoshuo();
}
