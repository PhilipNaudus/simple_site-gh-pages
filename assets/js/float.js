var floats = document.getElementsByClassName("float");
for(var i=0; i<floats.length; i++)
{
	floats[i].id = "floatImg"+i;
	floats[i].previousElementSibling.id = "floatP"+i;
}
var floatParent = floats[0].parentNode;

function repositionFloats()
{
 	var browserWidth = Math.min(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth, window.innerWidth);

	if(browserWidth>830)
	{
		for(var i=0; i<floats.length; i++)
		{
			floatParent.insertBefore(floats[i], document.getElementById("floatP"+i));

			var cssFloat = floats[i].classList[1];
			var margin = -floats[i].offsetWidth/2;
			floats[i].style.cssFloat = cssFloat;
			floats[i].style.padding = "20px";

			if(cssFloat=="left") floats[i].style.marginLeft = margin+"px";
			else if(cssFloat=="right") floats[i].style.marginRight = margin+"px";

			// Make sure that the element doesn't get cut off to the left
			var left = floats[i].getBoundingClientRect().left;
			if(left<0) floats[i].style.marginLeft = (margin-left)+"px";

			// Make sure that the element doesn't get cut off to the right
			var right = browserWidth - floats[i].getBoundingClientRect().right;
			if(right<0) floats[i].style.marginRight = (margin-right+30)+"px";
		}
	} else
	{
		for(var i=0; i<floats.length; i++)
		{
			floatParent.insertBefore(document.getElementById("floatP"+i), floats[i]);

			floats[i].style.cssFloat = "none";
			floats[i].style.marginLeft = "auto";
			floats[i].style.marginRight = "auto";
			floats[i].style.marginBottom = "2em";
			floats[i].style.padding = "0px";
		}
	}
}

window.addEventListener("resize", repositionFloats);
repositionFloats();

//alert(document.getElementsByClassName("container")[0].offsetWidth);
