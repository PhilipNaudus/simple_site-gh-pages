function toggle_note()
{
	if(document.getElementById("note").style.display == "none")
	{
		document.getElementById("note").style.display = "inline";
		document.getElementById("show_note_icon").innerHTML = "&#708;";
		document.getElementById("note_link").title = "Show less";
	} else
	{
		document.getElementById("note").style.display = "none";
		document.getElementById("show_note_icon").innerHTML = "&#709;";
		document.getElementById("note_link").title = "Show more";
	}
}
toggle_note();
