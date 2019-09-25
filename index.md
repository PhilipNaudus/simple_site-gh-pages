---
layout: page
title: "Mulanbook: The history and legend of Hua Mulan"
description: "In-depth analysis into Mulan's history and legend, including research on numerous retellings and historical references written over the past 1,500 years."
---

{::nomarkdown}

{% assign dynastyArr = "northern_wei#tang#yuan#ming#qing#post_imperial" | split: '#' %}
{% assign dynastyNames = "Northern Wei (386&ndash;534 AD)#Tang Dynasty (618&ndash;907 AD)#Yuan Dynasty (1271&ndash;1368 AD)#Ming Dynasty (1368&ndash;1644 AD)#Qing Dynasty (1644&ndash;1912)#Post-Imperial China (1912&ndash;Present)" | split: '#' %}


# Generate list of articles
{% assign imageCount = 0 %}
{% for dynasty in dynastyArr %}
	<h4 class="heading text-left mb-5"><img data-src="/assets/images/thumbs/dynasties/{{ dynasty }}.jpg" width="80" height="80" class="lazy">{{ dynastyNames[forloop.index0] }}</h4>
	{% assign folderName = '/' | append: dynasty | append: '/' %}
	{% assign folder = site.pages | where_exp: "item" , "item.path contains folderName" | sort: "num" %}

	{% for article in folder %}
		<div class="row {% if forloop.last %} last_article {% else %} first_article {% endif %}">
			<div class="col-md-4 main-1">
				{% if article.image contains "#" %}
					{% assign imageArr = article.image | split: '#' %}
					{% assign defaultImage = imageArr[0]  %}
				{% else %}
					{% assign defaultImage = article.image  %}
				{% endif %}

				<a href="{{ article.url }}"><img id="i{{ imageCount }}" data-src="/assets/images/thumbs/articles/{{ defaultImage }}" alt="{{ article.alt | strip_html }}" width="{{ article.imageW }}" height="{{ article.imageH }}" class="lazy img-fluid"></a>
				{% assign imageCount = imageCount | plus:1 %}
			</div>
			<div class="col-md-8 main-2">
				<h3 class="mt-2"><a href="{{ article.url }}">{{ article.title }}</a></h3>
				<p class="mt-3">{{ article.description }}</p>
			</div>
		</div>
	{% endfor %}
{% endfor %}

# Generate list of placeholder images
#{% assign placeholdersArr = "" %}
#{% for dynasty in dynastyArr %}
#	{% assign folderName = '/' | append: dynasty | append: '/' %}
#	{% assign folder = site.pages | where_exp: "item" , "item.path contains folderName" | sort: "num" %}
#
#	{% for article in folder %}
#		{% assign placeholdersArr = placeholdersArr | append: "'" | append: article.imageBase64 | append: "'," %}
#	{% endfor %}
#{% endfor %}
#{% assign size = placeholdersArr | size | minus: 1 %}
#{% assign placeholdersArr = placeholdersArr | slice: 0, size %}
<script type="text/javascript">var placeholdersArr = ["PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxMyI+PGZpbHRlciBpZD0iYiI+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTIiIC8+PC9maWx0ZXI+PHBhdGggZmlsbD0iIzg5NmE0OSIgZD0iTTAgMGgyMHYxM0gweiIvPjxnIGZpbHRlcj0idXJsKCNiKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjUgLjUpIiBmaWxsLW9wYWNpdHk9Ii41Ij48ZWxsaXBzZSBmaWxsPSIjYzliNjlkIiBjeD0iMTgiIGN5PSI2IiByeD0iMTkiIHJ5PSIxIi8+PHBhdGggZmlsbD0iIzdlNjAzZCIgZD0iTTEgN2gxOXY0SDF6Ii8+PHBhdGggZmlsbD0iIzdhNWYzYyIgZD0iTTEwIDNsMjUtMTRWM3oiLz48cGF0aCBmaWxsPSIjYTU3ODQ5IiBkPSJNMTMgMTFsMTIgMTAgNC02eiIvPjwvZz48L3N2Zz4="]; function imgPlaceholders() { for(var i=0; i<{{imagCount}}; i++) { var pImg = document.getElementById('i'+i); pImg.style.backgroundSize = "cover"; pImg.style.backgroundImage="url(data:image/svg+xml;base64,"+placeholdersArr[i]+")"; pImg.style.width="100%"; pImg.height = (pImg.offsetWidth*0.6557);}} window.addEventListener("resize", imagePlaceholders); imagePlaceholders();
</script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@12.0.0/dist/lazyload.min.js" onload="var lazyLoadInstance=new LazyLoad({elements_selector:'.lazy'});"></script>
{:/}
