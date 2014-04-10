
$(document).ready(function() {
	$("#basecamp, #basecamp-arrow, #highrise, #highrise-arrow, #campfire, #campfire-arrow").hide(); 


$("#basecamp-box").mouseenter(function() { 
	$("#basecamp, #basecamp-arrow").show();
		$("#maintext, #subtext").hide();
$("#basecamp-box").mouseleave(function() {
	$("#maintext, #subtext").show();
		$("#basecamp, #basecamp-arrow").hide();
		});	
	});	

$("#highrise-box").mouseenter(function() { 
	$("#highrise, #highrise-arrow").show();
		$("#maintext, #subtext").hide();
$("#highrise-box").mouseleave(function() {
	$("#maintext, #subtext").show();
		$("#highrise, #highrise-arrow").hide();
		});	
	});	

$("#campfire-box").mouseenter(function() { 
	$("#campfire, #campfire-arrow").show();
		$("#maintext, #subtext").hide();
$("#campfire-box").mouseleave(function() {
	$("#maintext, #subtext").show();
		$("#campfire, #campfire-arrow").hide();
		});	
	});	
	
});

