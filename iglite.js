var hint = $(document.createElement("a")).text(" show search pane");
$("#gbar").append(hint);
function show_header()
{
	$('#nhdrwrap').slideDown();
	hint.fadeOut();
}

function hide_header()
{
	$('#nhdrwrap').slideUp();
	hint.fadeIn();
}

$("#guser").mouseenter(show_header);
$("#gbar").mouseenter(show_header);
$("#nhdrwrap").mouseleave(hide_header);
hide_header();
