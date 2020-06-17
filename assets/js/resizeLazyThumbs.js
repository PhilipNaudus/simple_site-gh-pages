var lazies = document.getElementsByClassName("lazy");
for(var i=0; i<lazies.length; i++)
{
	lazies[i].style.width = getComputedStyle(lazies[i]).maxWidth;
}
