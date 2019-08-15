---
layout: page
title: "Mulanbok: The history and legend of Hua Mulan"
description: "In-depth analysis into Mulan's history and legend, including research on numerous retellings and historical references written over the past 1,500 years."
---

{::nomarkdown}

{% assign dynastyArr = "northern_wei#tang#yuan#ming#qing#post_imperial" | split: '#' %}
{% assign dynastyNames = "Northern Wei (386&ndash;534 AD)#Tang Dynasty (618&ndash;907 AD)#Yuan Dynasty (1271&ndash;1368 AD)#Ming Dynasty (1368&ndash;1644 AD)#Qing Dynasty (1644&ndash;1912)#Post-Imperial China (1912&ndash;Present)" | split: '#' %}
{% assign dynastyAlts = "A relic from the Northern Wei dynasty. Image source: http://bit.ly/2GuB2Vv#A pagoda built during the Tang Dynasty. Image source: http://bit.ly/2GpfHwP#A tower built durnig the Yuan Dynasty. Image source: http://bit.ly/2LIJlkX#An arch constructed during the Ming Dynasty. Image source: http://bit.ly/2GveIuU#A gate to the Forbidden City, which was used during the Qing Dynasty. Image source: http://bit.ly/2ybwq23#National government office of the ROC. Image source: http://bit.ly/2yNrPTX" | split: '#' %}

{% for dynasty in dynastyArr %}
	<h4 class="heading text-left mb-5"><img data-src="/assets/images/thumbs/dynasties/{{ dynasty }}.jpg" width="80" height="80" alt="{{ dynastyAlts[forloop.index0] }}" class="lazy">{{ dynastyNames[forloop.index0] }}</h4>
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

				<a href="{{ article.url }}"><img src="/assets/images/thumbs/articles/placeholder.jpg" data-src="/assets/images/thumbs/articles/{{ defaultImage }}" alt="{{ article.alt | strip_html }}" class="lazy img-fluid"></a>
			</div>
			<div class="col-md-8 main-2">
				<h3 class="mt-2"><a href="{{ article.url }}">{{ article.title }}</a></h3>
				<p class="mt-3">{{ article.description }}</p>
			</div>
		</div>
	{% endfor %}
{% endfor %}
{:/}
