$(document).ready(function(){
  $("#1").ready(function(){
    $("#nap").hide(0);
    $("p").hide(0);
  });
});
$(document).ready(function(){
  $("#1").click(function(){
    $("#nap").show(2000);
    $("p").hide(2000); 
  });
});
$(document).ready(function(){
  $("p").click(function(){
     $("p").hide(2000);
  });
  });
$(document).ready(function(){
  $("#nap").dblclick(function(){
    $("#nap").hide(2000);
  });
});
var souhlas;
$(document).ready(function(){
  $("#2").click(function(){
  	var x;
    if (confirm("KliknutĂ­m na 'OK' vyjede Ĺ™eĹˇenĂ­ ve formÄ› obrĂˇzku. Pokud si nepĹ™ejete zobrazit Ĺ™eĹˇenĂ­ kliknÄ›te na 'ZruĹˇit'") == true) {
    $("p").show(2000); 
    $("#nap").hide(2000);
    }
  	    
  return souhlas;});
});
