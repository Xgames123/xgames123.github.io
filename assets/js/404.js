var eggSize = 100;

var checkExist = setInterval(function() {
   if (document.getElementById("egg")) {
		clearInterval(checkExist);
		const egg = document.getElementById("egg");

		egg.addEventListener("mouseup", ()=> {
			eggSize*=1.005;
			
		});
		
   }
}, 100); 

setInterval(()=>{
	if(eggSize > 110){
		egg.className = "shake";
		eggSize*=1.01;
	}
	egg.style ="width: "+eggSize+"px; filter: drop-shadow(0px 0px "+(eggSize-110)+"px #FFFFFFFF);"
	if(eggSize > 700){
		window.open("https://en.wikipedia.org/wiki/Egg"); 
		location.reload();
	}
	
}, 10);