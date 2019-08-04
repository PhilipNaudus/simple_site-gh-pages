function toggle_note()
{
	if(document.getElementById("note").style.display == "none")
	{
		document.getElementById("note").style.display = "inline";
		document.getElementById("show_note_icon").style.display = "none";
		document.getElementById("hide_note_icon").style.display = "inline";
	} else
	{
		document.getElementById("note").style.display = "none";
		document.getElementById("show_note_icon").style.display = "inline";
		document.getElementById("hide_note_icon").style.display = "none";
	}
}
