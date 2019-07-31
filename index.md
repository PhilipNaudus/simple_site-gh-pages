---
layout: page
title: simple site
tagline: Easy websites with GitHub Pages
description: Minimal tutorial on making a simple website with GitHub Pages
---

{::nomarkdown}
<h4 class="heading text-left mb-5"><img src="images/thumbs/dynasties/northern_wei.jpg" alt="A relic from the Northern Wei dynasty. Image source: http://bit.ly/2GuB2Vv">Northern Wei (386&ndash;534 AD)</h3>

{% assign folder1 = site.pages | where_exp: "item" , "item.path contains 'northern_wei'"%}
{% for page in folder1 %}
	<div class="row {% if forloop.last %} last_article {% else %} first_article {% endif %}">
		<div class="col-md-4 main-1">
			<a href="{{ page.url }}"><img src="{{ page.image }}" alt="{{ page.alt }}" class="img-fluid"></a>
		</div>
		<div class="col-md-8 main-2">
			<h3 class="mt-2"><a href="{{ page.url }}">{{ page.title }}</a></h3>
			<p class="mt-3">{{ page.description }}</p>
		</div>
	</div>
     <!--<h2><a href="{{ page.url }}">{{ page.title }}</a></h2>-->
{% endfor %}
{:/}

[Github Pages](https://pages.github.com) provide a simple way to make a
website using
[Markdown](https://daringfireball.net/projects/markdown/) and
[git](https://git-scm.com).

For me, the painful aspects of making a website are

- Working with html and css
- Finding a hosting site
- Transferring stuff to the hosting site

With [GitHub Pages](https://pages.github.com), you just write things in
[Markdown](https://daringfireball.net/projects/markdown/),
[GitHub](https://github.com) hosts the site for you, and you just push
material to your GitHub repository with `git add`, `git commit`, and
`git push`.

If you love [git](https://git-scm.com/) and
[GitHub](https://github.com), you'll love
[GitHub Pages](https://pages.github.com), too.

The sites use [Jekyll](https://jekyllrb.com/), a
[ruby](https://www.ruby-lang.org/en/) [gem](https://rubygems.org/), to
convert Markdown files to html, and this part is done
automatically when you push the materials to the `gh-pages` branch
of a GitHub repository.

The [GitHub](https://pages.github.com) and
[Jekyll](https://jekyllrb.com) documentation is great, but I thought it
would be useful to have a minimal tutorial, for those who just want to
get going immediately with a simple site. To some readers, what GitHub
has might be simpler and more direct.  But if you just want to create
a site like the one you're looking at now, read on.

Start by reading the [Overview page](pages/overview.html), which
explains the basic structure of these sites. Then read
[how to make an independent website](pages/independent_site.html). Then
read any of the other things, such as
[how to test your site locally](pages/local_test.html).

- [Overview](pages/overview.html)
- [Making an independent website](pages/independent_site.html)
- [Making a personal site](pages/user_site.html)
- [Making a site for a project](pages/project_site.html)
- [Making a jekyll-free site](pages/nojekyll.html)
- [Testing your site locally](pages/local_test.html)
- [Resources](pages/resources.html)

If anything here is confusing (or _wrong_!), or if I've missed
important details, please
[submit an issue](https://github.com/kbroman/simple_site/issues), or (even
better) fork [the GitHub repository for this website](https://github.com/kbroman/simple_site),
make modifications, and submit a pull request.

---

The source for this minimal tutorial is [on github](https://github.com/kbroman/simple_site).

Also see my [tutorials](https://kbroman.org/pages/tutorials) on
[git/github](https://kbroman.org/github_tutorial),
[GNU make](https://kbroman.org/minimal_make),
[knitr](https://kbroman.org/knitr_knutshell),
[R packages](https://kbroman.org/pkg_primer),
[data organization](https://kbroman.org/dataorg),
and [reproducible research](https://kbroman.org/steps2rr).
