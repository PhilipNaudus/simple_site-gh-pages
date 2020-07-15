---
layout: custom
title: Pause Emails
---

<style>
input[type=text], textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

#formdiv {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>

<!-- /banner_bottom -->
<div class="main banner_bottom" id="article">
	<div class="clearfix"> </div>
	<div class="container">
		<div class="inner_sec_top_aglieits">
			<div class="banner_bottom_info">
				<h1>Would you like to pause the emails you receive from me? (I will still let you know when the book is completed)</h1>

				<div id="formdiv">
				  <form action="/pages/overview/thank_you_pause" netlify>
				    <label for="pause_email">Email Address (optional)</label>
				    <input type="text" id="pause_email" name="pause_email" placeholder="email@email.com">

				    <input type="submit" value="Submit">
				  </form>
				</div>
			</div>
		</div>
	</div>
</div>





<div>

</div>
<div style="clear:both;"></div>
