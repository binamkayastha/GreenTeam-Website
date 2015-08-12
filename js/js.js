window.onload = function(e) {
	$("#MainDiv").load("currentEvents.html");
}
function changePage(page) {
    $("#MainDiv").load(page);
}