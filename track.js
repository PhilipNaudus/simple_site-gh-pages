alert("thank you.");

(function(apiKey){var ind=document.createElement('script'); ind.src='//cdn.indicative.com/js/Indicative.min.js';ind.type='text/javascript';ind.async='true';var ind_init=false;ind.onload=ind.onreadystatechange=function(){var rs=this.readyState;if(ind_init||(rs&&rs!='complete'&&rs!='loaded'))return;ind_init=true;Indicative.initialize(apiKey,{recordSessions:true,sessionsThreshold:30,cookiesOnMainDomain:false});Indicative.buildEvent('Page View');};var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ind,s);})('0235576c-f56e-45fc-85f5-f57e511442fd');document.getElementById('track').innerHTML='You are now being tracked. Thank you for volunteering.';

alert("All done.");