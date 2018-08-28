/*advanced slider code*/
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
var count=0;        //count
	 
// Image List
images[1] = "images/img-one.jpeg";
images[0] = "images/img-two.jpeg";
images[2] = "images/img-three.jpeg";

// images[3] = "http://lorempixel.com/400/200/people";

// Change Image
function changeImg(){

	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	timer=setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;

// setInterval(changeImg,2000);

let buttonLeft=document.getElementById('button-left'),
buttonRight=document.getElementById('button-right');

buttonLeft.addEventListener('click',function(){
	           clearInterval(timer);
               if(count>0){
                     count-=1;
                     document.slide.src=images[count];
               }else{
               	     count=images.length-1;
               }
});

buttonRight.addEventListener('click',function(){
	          clearInterval(timer);
               if(count<images.length-1){
                     count+=1;
                     document.slide.src=images[count];
               }else{
               	     count=0;
               }
});
/*advanced slider code end*/

/*document ready event*/
$(document).ready(function(){


	        //loader hide
	        $(window).on('load',function(){
                    $('#preloader').fadeOut();
	        });

	        var lan=$('.lang');

	       $('#language').on('change',function(){
	       	         //language code eg: en or mm
	       	         var langCode=$(this).val();

	                $('.lang').each(function(index,element){

	                	         //looping through each element and  use the Json element translateLan from language.json

                               $(this).text(translateLang[langCode][$(this).attr('key')]);

	                });
	       });
});
/*document ready event end*/