// JavaScript Document
$('.answers input[type="radio"]').click(function(){
    
    var type = $(this).data('type');
   
    if(type===1) $(this).parent().css({backgroundColor:"#3ab54a"})
    else $(this).parent().css({backgroundColor:"#ff2325"})
    
});