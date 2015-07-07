/*$(document).ready(function (){
	// document.scrollTop();
	onscrollFunction();
	checkAndFixLogo();

	var headh = 44"#left-panel").height(); //headher height
	var rightpanel = $("#right-panel").height();
	// console.log(headh);
	var headp = $("#left-panel").outerHeight();
	$("#navigation").css('margin-top', headp); //Doesn't include padding
	// window.addEventListener('scroll', onscrollFunction(), false);
	window.onscroll = onscrollFunction;
	function onscrollFunction() {
		var scrollY=window.pageYOffset || document.body.scrollTop; //Copy pasted?
		// console.log(window.getComputedStyle(document.getElementById("left-panel")).getPropertyValue("height"));
		// debugger;
		var headhCalc = headh - (2 * scrollY);
		// console.log(headhCalc);
		$("#left-panel").height(headhCalc);

		$("#left-panel").css('margin-top', scrollY); //Why does it work without this

		$("#navigation").css('margin-top', scrollY+headhCalc); 	//Doesn't including padding


		checkAndFixLogo();
	}

	// window.addEventListener('resize', checkAndFixLogo(), false);
	// function checkAndFixLogo() {
	window.onresize = checkAndFixLogo;
	function checkAndFixLogo() {
		var logoWrapH = $("#logo_wrapper").height(); //logo wrapper width
		var logoWrapW = $("#logo_wrapper").width();
		// console.log("H: " + logoWrapH);
		// console.log("W: " + logoWrapW);
		
		if (logoWrapH >= 300 && logoWrapW >= 300) {
			$("#logo").height(300);
			$("#logo").width(300);
		}
		else {
			var min_side = Math.min(logoWrapH, logoWrapW); //get minimum of the two heights, and set logo divs height to the minimum
			// console.log(min_side);
			if (min_side<100){
			}
			else {
				$("#logo").height(min_side);
				$("#logo").width(min_side);
			}
		}
	}
});*/

// function loadXMLDoc () 
// {
// 	var xmlhttp;
// 	if (window.XMLHttpRequest) {
// 		xmlhttp=new XMLHttpRequest();
// 	} else {
// 		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
// 	}

// }