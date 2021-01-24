$(document).ready(function(){
 
    



$("#Servies1").click(function() {
    if ($("#CinemaService").css('display') == "none" ) {
		$("#CinemaService").fadeIn(500);
        $("#LittératureService").fadeOut(10);
        $("#DiscoursService").fadeOut(10);
        console.log(document.querySelector("#Bulles1").style.backgroundColor = "#FF5B2B")
		console.log(document.querySelector("#PetiteBulles1").style.backgroundColor = "#FF5B2B")
			// console.log(document.querySelector("#Bulles1").style.transform = "rotateY(360deg)")
			// console.log(document.querySelector("#PetiteBulles1").style.transform = "rotateY(-540deg)")
		console.log(document.querySelector("#Bulles2").style.backgroundColor = "transparent")
		console.log(document.querySelector("#PetiteBulles2").style.backgroundColor = "transparent")
		console.log(document.querySelector("#Bulles3").style.backgroundColor = "transparent")
		console.log(document.querySelector("#PetiteBulles3").style.backgroundColor = "transparent")
    } else {
		// $("#EnqueteNonPlausible").fadeOut(500);
	 }
});



$("#Servies2").click(function() {
    if ($("#LittératureService").css('display') == "none" ) {
		$("#LittératureService").fadeIn(500);
        $("#CinemaService").fadeOut(10);
        $("#DiscoursService").fadeOut(10);
		console.log(document.querySelector("#Bulles2").style.backgroundColor = "#80ffdb")
		console.log(document.querySelector("#PetiteBulles2").style.backgroundColor = "#80ffdb")
		console.log(document.querySelector("#Bulles1").style.backgroundColor = "transparent")
		console.log(document.querySelector("#PetiteBulles1").style.backgroundColor = "transparent")
		console.log(document.querySelector("#Bulles3").style.backgroundColor = "transparent")
		console.log(document.querySelector("#PetiteBulles3").style.backgroundColor = "transparent")
	} else {
		// $("#CinemaService").fadeOut(500);
	 }
});



$("#Servies3").click(function() {
    if ($("#DiscoursService").css('display') == "none" ) {
		$("#DiscoursService").fadeIn(500);
		$("#LittératureService").fadeOut(10);
        $("#CinemaService").fadeOut(10);
		console.log(document.querySelector("#Bulles3").style.backgroundColor = "#7400b8")
		console.log(document.querySelector("#PetiteBulles3").style.backgroundColor = "#7400b8")
		console.log(document.querySelector("#Bulles1").style.backgroundColor = "transparent")
		console.log(document.querySelector("#PetiteBulles1").style.backgroundColor = "transparent")
		console.log(document.querySelector("#Bulles2").style.backgroundColor = "transparent")
		console.log(document.querySelector("#PetiteBulles2").style.backgroundColor = "transparent")
	} else {
		// $("#CinemaService").fadeOut(500);
	 }
});

// backgroundColor = "blue"

     
});

