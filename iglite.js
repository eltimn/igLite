var hideSwitch = $(document.createElement("a")).text(" hide search pane");
var showSwitch = $(document.createElement("a")).text(" show search pane");

function show_header()
{
	$('#nhdrwrap').slideDown();
	hideSwitch.show();
	showSwitch.hide();
}

function hide_header()
{
	$('#nhdrwrap').slideUp();
	showSwitch.show();
	hideSwitch.hide();
}


$("#gbar").append(showSwitch);
$("#gbar").append(hideSwitch);
showSwitch.click(show_header);
hideSwitch.click(hide_header);
hide_header();
