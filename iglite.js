var pending;
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

function delay_hide()
{
	if (pending)
		window.clearTimeout(pending);

	pending = window.setTimeout(hide_header, 500);
}

function delay_show()
{
	if (pending)
		window.clearTimeout(pending);

	pending = window.setTimeout(show_header, 200);
}

function cancel_pending()
{
	if (pending)
		window.clearTimeout(pending);

	pending = null;
}

$("#guser").mouseover(delay_show);
$("#guser").mouseleave(delay_hide);
$("#gbar").mouseover(delay_show);
$("#gbar").mouseleave(delay_hide);
$("#nhdrwrap").mouseover(cancel_pending);
$("#nhdrwrap").mouseleave(delay_hide);
$(document).ready(delay_hide);
