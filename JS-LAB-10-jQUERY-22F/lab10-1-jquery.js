//LAB 10 - 1 FAQ PAGE

$(window).on("load", function(){
    $('.contentBox').hide();
$('h2').on("click", function(){
    $(this).next('.contentBox').slideToggle(3000);
})
$('.contentBox').hover(
   function(){$(this).css({'color':'tan', 'background':'white'})},
   function(){$(this).css({'color':'white', 'background':'tan'})}
);
});