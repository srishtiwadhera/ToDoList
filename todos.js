// Check off specific Todos by Clicking
// adding another argument li which says that all the lis inside the ul when they were present on page when it was loaded on added afterwards
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
       $(this).remove();
	});
	//stops the bubbling effect
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
    	//grabbing new todo text from input
    	var todoText = $(this).val();
    	$(this).val("");
    	//create a new li and add to ul
    	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
   $("input[type='text']").fadeToggle();
});