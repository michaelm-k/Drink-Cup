$('#info-modal').modal('show');

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
	
//START: ARROWS

	//START: RIGHT ARROW
	function goLeft() {
		if ($(window).width() > 1000){
			$('#arrow-right').animate({'left': '-6%'}, 1000, goRight);
		} else {
			$('#arrow-right').animate({'left': '-2%'}, 1000, goRight);
		}
	}
		
	function goRight() {
		if ($(window).width() > 1000){
			$('#arrow-right').animate({'left': '15%'}, 1000, goLeft);
		} else {
			$('#arrow-right').animate({'left': '6%'}, 1000, goLeft);
		}
	}	
		
	setTimeout(function() {
		$('#arrow-right').each(function(i) {
		$(this).delay((i++) * 500).fadeTo(1000, 1); })
	}, 3600);
		
	setTimeout(function() { goRight(); }, 4500);
	//END: RIGHT ARROW	
	
	//START: LEFT ARROW
	function goLeft2() {
		if ($(window).width() > 1000){
			$('#arrow-left').animate({'left': '-15%'}, 1000, goRight2);
		} else {	
			$('#arrow-left').animate({'left': '-6%'}, 1000, goRight2);
		}			
	}
		
	function goRight2() {
		if ($(window).width() > 1000){
			$('#arrow-left').animate({'left': '6%'}, 1000, goLeft2);
		} else {	
			$('#arrow-left').animate({'left': '2%'}, 1000, goLeft2);
		}
	}	
	setTimeout(function() {
		$('#arrow-left').each(function(i) {
		$(this).delay((i++) * 500).fadeTo(1000, 1); })
	}, 3600);
		
	setTimeout(function() { goLeft2(); }, 4500);
	//END: LEFT ARROW
	
//END: ARROWS 