/*$('img').hover(
		
		function(){
			$('div').stop().animate({'height' : '420px', 'top' : 90 }, 1500);
		},
		
		function(){          
			$('div').stop().animate({'height' : 0, 'top' : '510px' }, 1500);
		}
		
		);*/
	//var waterAudio = new Audio('pour_water_audio.mp3');
	//var slurpAudio = new Audio('slurp_audio.mp3');
	
	
	var slurped=0, poured=0, glassclicks=0;	

	function pourDrink(){	
		waterAudio.play();		
		$('#water').animate({'height' : '440px', 'top' : -510 }, 3600, function() {
			slurped=0;
			glassclicks=0;
		});			
	}			
	pourDrink();
	
	//START: D-R-I-N-K U-P
	$('p').each(function(){
			
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
				
		/* Wait a bit before we begin... */
				
			spans.each(function(i, span){
				
				setTimeout(function(){
					$(span).animate(spanDimensions[i], 400, !spans[i+1] && function(){
						p.html(originalContent);    
					});
				}, i * 50)
					
			});
				
		}, 3600);		
	});
	//END: D-R-I-N-K U-P
	
	setTimeout(function(){//wait for D-R-I-N-K U-P to finish
		poured=1;
		glassclicks=0;
	}, 4500);
	
	//START: ARROWS
	
		//START: RIGHT ARROW
		function goLeft() {
			$('#arrow-right').animate({'left': '-60px'}, 1000, goRight);		
		}
		
		function goRight() {
			$('#arrow-right').animate({'left': '60px'}, 1000, goLeft);
		}	
		
		setTimeout(function() {
			$('#arrow-right').each(function(i) {
			$(this).delay((i++) * 500).fadeTo(1000, 1); })
		}, 3600);
		
		setTimeout(function() { goRight(); }, 5000);
		//END: LEFT ARROW
		
		//START: LEFT ARROW
		function goLeft2() {
			$('#arrow-left').animate({'left': '-60px'}, 1000, goRight2);		
		}
		
		function goRight2() {
			$('#arrow-left').animate({'left': '60px'}, 1000, goLeft2);
		}
		
		setTimeout(function() {
			$('#arrow-left').each(function(i) {
			$(this).delay((i++) * 500).fadeTo(1000, 1); })
		}, 3600);
		
		setTimeout(function() { goLeft2(); }, 5000);
		//END: LEFT ARROW
		
	//END: ARROWS
		
	$( '#glass' ).click(function() {
		glassclicks++;		
		var waterColor = $("#full").spectrum("get");
		
		if (slurped==0&&poured==1 && glassclicks==1) {
			slurpAudio.play();	
			$('#water').animate({'height' : 0, 'top' : '-70px' }, 2250, function() {	
				$("#full").spectrum("enable");
				slurped=1;
				poured=0;
				glassclicks=0;
			});					
		} else if (slurped==1 && poured==0 && glassclicks==1) {
			$( "#water" ).css( "background-color", waterColor); 
			pourDrink();
			poured=1;
			$("#full").spectrum("disable");
		} 
	});
	
	//START: SOUND ON/OFF
	$('#soundstatus').click(function(){
		if (document.getElementById("soundstatus").getAttribute('src') === 'img/unmuted.png') {
			$('#soundstatus').attr('src', 'img/muted.jpg');
			document.getElementById("waterAudio").muted=true;
			document.getElementById("slurpAudio").muted=true;
		} else {
			$('#soundstatus').attr('src', 'img/unmuted.png');
			document.getElementById("waterAudio").muted=false;
			document.getElementById("slurpAudio").muted=false;
		}			
	});
	//END: SOUND OM/OFF