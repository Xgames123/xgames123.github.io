var pressingEgg = false;
var eggSize = 100;

var checkExist = setInterval(function() {
   if (document.getElementById("egg")) {
		clearInterval(checkExist);
		const egg = document.getElementById("egg");
		egg.addEventListener("mousedown", ()=> {
			pressingEgg = true;
			
		});

		egg.addEventListener("mouseup", ()=> {
			pressingEgg = false;
			
		});
		
		egg.addEventListener("mouseleave", ()=>{
			pressingEgg = false;
		})
   }
}, 100); 

setInterval(()=>{
	if(pressingEgg || eggSize > 110){
		if(eggSize > 110){
			egg.className = "shake";
			eggSize*=1.01;
		}else{
			eggSize*=1.0002;
		}
			
		egg.style ="width: "+eggSize+"px; filter: drop-shadow(0px 0px "+(eggSize-110)+"px #FFFFFFFF);"
		
	}
	if(eggSize > 700){
		window.open("https://www.google.com/search?q=egg"); 
		location.reload();
	}
	
}, 10);