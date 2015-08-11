$(document).ready(function(){
	$(".list-1").bind("click", function(){
		$(".list-1").css("backgroundPosition", "0px -26px");
		$(".list-2").css("backgroundPosition", "-30px -26px");

		$("li.list-2-v").removeClass("list-2-v").addClass("list-1-o");
	})
	$(".list-2").bind("click", function(){
		$(".list-1").css("backgroundPosition", "0px 0px");
		$(".list-2").css("backgroundPosition", "-30px 0px");
		
		$("li.list-1-o").removeClass("list-1-o").addClass("list-2-v");
	})

	$("")
})