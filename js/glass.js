var slurped=0, poured=0, glassclicks=0;	
var counter=0;//for unique drinks
var colorArray = [];
var waterColor;

function pourDrink() {
	waterAudio.play();		
    $('.wrapper .water').animate({
        'height': '229px',
        'top': 0
    }, 3925, function () {
        slurped=0;
		glassclicks=0;
		$(".wrapper .img-responsive").css("cursor", "pointer");
    });
}
pourDrink();

//START: D-R-I-N-K U-P
	$('#drink_up').each(function(){
			
		var p = $(this),
		spans = $('<span>' + p.text().split('').join('</span><span>') + '</span>'),
		originalContent = p.html();
			
		p.height(p.height()).html(spans);
			
		var spanDimensions = $.map(spans, function(span){
			return $(span).position();
		});
			
		spans.css({
			position: 'absolute',
			top: -(p.offset().top + 100)
		});
				
		setTimeout(function(){
			spans.each(function(i, span) {
				
				setTimeout(function(){
					$(span).animate(spanDimensions[i], 400, !spans[i+1] && function(){
						p.html(originalContent);    
					});
				}, i * 50)
					
			});	
		}, 3600);		
	});
//END: D-R-I-N-K U-P

setTimeout(function(){
	$("#uniquedrinks").stop(true).animate( {opacity: '1'}, 1500); 
}, 3600);	

setTimeout(function(){ //wait for D-R-I-N-K U-P to finish
	poured=1;
	glassclicks=0;
}, 4500);
	
$( '.glass' ).click(function() {
	glassclicks++;		
	waterColor = $("#full").val();
	$(".wrapper .img-responsive").css("cursor", "default");	
	if (slurped==0&&poured==1 && glassclicks==1) {
		slurpAudio.play();	
		$('.wrapper .water').animate({'height' : 0, 'top' : '229px' }, 3000, function() {	
			$("#full").spectrum("enable");
			$(".wrapper .img-responsive").css("cursor", "pointer");
			slurped=1;
			poured=0;
			glassclicks=0;
			$( "#counter" ).css( "color", $("#full").spectrum("get")); 
				
			if ($.inArray(waterColor, colorArray)==-1) {
				colorArray.push(waterColor);
				counter += 1;
				document.getElementById("counter").innerHTML = counter;
			}		
		});					
	} else if (slurped==1 && poured==0 && glassclicks==1) {
		$( ".wrapper .water" ).css( "background-color", $("#full").spectrum("get")); 
		pourDrink();
		poured=1;
		$("#full").spectrum("disable");
	} 
});