$(document).ready(function() {
	$("select[name='gongsi']").change(function(){
		var url = $(this).val();
		$(".my_iframe").attr("src",url);
	});
});
	