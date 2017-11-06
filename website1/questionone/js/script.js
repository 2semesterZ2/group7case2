// JavaScript Document
$('.answers input[type="radio"]').click(function(){
    
    var type = $(this).data('type');
   
    if(type===1) $(this).parent().css({backgroundColor:"green"})
    else $(this).parent().css({backgroundColor:"red"})
    
});