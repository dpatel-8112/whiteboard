window.onload = () =>{

   var canvas = document.querySelector("#canvas");
   var ctx = canvas.getContext("2d");
   const colors = document.querySelectorAll(".colors");

   var color = 'white';

 
    canvas.width = window.innerWidth;
   	canvas.height = window.innerHeight;



   window.addEventListener("resize",()=>{

   	canvas.width = window.innerWidth;
   	canvas.height = window.innerHeight;
   })


   //ctx.fillRect(0, 0, 200, 500);


   let painting = false;

   function startPosition(e){
   	painting = true;
   	draw(e);
   }

   function endPosition(){
   	painting = false;
   	ctx.beginPath();
   }

   function draw(e){

   	if(!painting) return;

   	console.log(e.clientX, e.clientY);

   	ctx.lineWidth = 10;
   	ctx.lineCap = "round";

   	//ctx.strokeStyle = 'white';
   	ctx.strokeStyle = color;

   	ctx.lineTo(e.offsetX, e.offsetY);
   	ctx.stroke();

   	ctx.beginPath();
   	ctx.moveTo(e.offsetX, e.offsetY);

   }


   function updateColor(e){
   	color = e.target.className.split(' ')[0];
   }



   canvas.addEventListener('mousedown', startPosition);

   canvas.addEventListener('mouseup', endPosition);

   canvas.addEventListener('mousemove', draw);

   canvas.addEventListener('ontouchstart', startPosition);

   canvas.addEventListener('ontouchend', endPosition);

   canvas.addEventListener('ontouchmove', draw);

   for(var i=0; i<4; i++){
   	colors[i].addEventListener('click', updateColor);
   }
  

}