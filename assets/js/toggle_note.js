function toggle_note()
{
	if(document.getElementById("note").style.display == "none")
	{
		document.getElementById("note").style.display = "inline";
		document.getElementById("show_note_icon").style.display = "none";
		document.getElementById("hide_note_icon").style.display = "inline";
		document.getElementById("note_link").title = "Hide notes";
	} else
	{
		document.getElementById("note").style.display = "none";
		document.getElementById("show_note_icon").style.display = "inline";
		document.getElementById("hide_note_icon").style.display = "none";
		document.getElementById("note_link").title = "Show notes";
	}
}
toggle_note();
