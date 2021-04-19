$(document).ready(function(){
	$(".btn").click(function(){
		var attr = $(this).attr("data-li");

		$(".btn").removeClass("active");
		$(this).addClass("active");

		$(".item").hide();

		if(attr == "hot"){
			$("." + attr).show();
		}
		else if(attr == "burger"){
			$("." + attr).show();
		}
		else if(attr == "cakes"){
			$("." + attr).show();
		}
		else{
			$(".item").show();
		}
	});
});