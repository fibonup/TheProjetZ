$(document).ready(function(){
 
    // ici le code que je t'ai fourni dans le jsfiddle

    $("#afficheMasque_0").click(function() {
    if ($("#text_0").css('display') == "none" ) {
		$("#text_0").slideDown(400);
		$('#afficheMasque_0').html("–");
	} else {
		$("#text_0").slideUp(400);
		$('#afficheMasque_0').html("+");
	}
});

    $("#afficheMasque_1").click(function() {
    if ($("#text_1").css('display') == "none" ) {
		$("#text_1").slideDown(400);
		$('#afficheMasque_1').html("–");
	} else {
		$("#text_1").slideUp(400);
		$('#afficheMasque_1').html("+");
	}
});

    $("#afficheMasque_2").click(function() {
    if ($("#text_2").css('display') == "none" ) {
		$("#text_2").slideDown(400);
		$('#afficheMasque_2').html("–");
	} else {
		$("#text_2").slideUp(400);
		$('#afficheMasque_2').html("+");
	}
});

    $("#afficheMasque_3").click(function() {
    if ($("#text_3").css('display') == "none" ) {
		$("#text_3").slideDown(400);
		$('#afficheMasque_3').html("–");
	} else {
		$("#text_3").slideUp(400);
		$('#afficheMasque_3').html("+");
	}
});

    $("#afficheMasque_4").click(function() {
    if ($("#text_4").css('display') == "none" ) {
		$("#text_4").slideDown(400);
		$('#afficheMasque_4').html("–");
	} else {
		$("#text_4").slideUp(400);
		$('#afficheMasque_4').html("+");
	}
});

    $("#afficheMasque_5").click(function() {
    if ($("#text_5").css('display') == "none" ) {
		$("#text_5").slideDown(400);
		$('#afficheMasque_5').html("–");
	} else {
		$("#text_5").slideUp(400);
		$('#afficheMasque_5').html("+");
	}
});

     $("#logo").click(function() {

    if ($("#document").css('display') == "none" ) {
		$("#document").slideDown(300);
		// $('#bouton').html("Z");
	} else {
		$("#document").slideUp(400);
		// $('#bouton').html("Z");
	}
});



      $("#logo").click(function() {

    if ($("#ijh").css('display') == "none" ) {
		$("#ijh").slideDown(300);
		// $('#bouton').html("Z");
	} else {
		$("#ijh").slideUp(400);
		// $('#bouton').html("Z");
	}
});
     
});


$(document).ready(function() {
    	$('#logo').click(function() {
        	$('#logo').toggleClass('rotated');
    	});
	});


	