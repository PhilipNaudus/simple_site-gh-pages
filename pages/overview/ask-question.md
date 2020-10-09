---
layout: custom
title: Ask a Question
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
				<h1>Do you have a question about Mulan? Please ask!</h1>

				<div id="formdiv">
				  <script type="text/javascript"> var submitted = !1 </script><iframe id="hidden_iframe" name="hidden_iframe" onload="submitted&&(window.location='https://mulanbook.com/pages/overview/thank-you-question')" style="display:none"></iframe>
				  <form action="https://mulanbook.com/pages/overview/thank-you-question" id="theform" style="display:none;" onsubmit="submitted=!0" target="hidden_iframe">
				    <label for="name">Name (optional)</label>
				    <input type="text" name="entry.242436072" placeholder="Your name...">

				    <label for="email">Email Address (optional)</label>
				    <input type="text" name="entry.675414612" placeholder="I can email you the answer (optional).">

				    <label for="question">What’s your question?</label>
				    <textarea name="entry.146508461"></textarea>
				  
				    <input type="submit" value="Submit">
				  </form>
				</div>
			</div>
		</div>
	</div>
</div>



<script type="text/javascript">
	document.getElementById("theform").style.display = "inline";
	document.getElementById("theform").action = "https://docs.google.com/forms/u/3/d/e/1FAIpQLSdpZ2U1DRE4iaPS5Ms4hNF1FxB9ZlelJCPMMBNd_XLMoGegag/formResponse";
</script>


<div>

</div>
<div style="clear:both;"></div>
