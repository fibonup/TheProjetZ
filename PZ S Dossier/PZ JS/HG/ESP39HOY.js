$(document).ready(function(){
 
    // ici le code que je t'ai fourni dans le jsfiddle

    $("#afficheMasque_0").click(function() {
    if ($("#text_0").css('display') == "none" ) {
		$("#text_0").slideDown(400);
		$('#afficheMasque_0').html("â€“");
	} else {
		$("#text_0").slideUp(400);
		$('#afficheMasque_0').html("+");
	}
});

    $("#afficheMasque_1").click(function() {
    if ($("#text_1").css('display') == "none" ) {
		$("#text_1").slideDown(400);
		$('#afficheMasque_1').html("â€“");
	} else {
		$("#text_1").slideUp(400);
		$('#afficheMasque_1').html("+");
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
     
});


$(document).ready(function() {
    	$('#logo').click(function() {
        	$('#logo').toggleClass('rotated');
    	});
	});


	