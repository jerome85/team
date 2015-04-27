$(document).ready(function(){
    $('.opaque').click(function(){
    	$('.clear').removeClass('clear').addClass('opaque');
    	$(this).removeClass('opaque').addClass('clear');
    	affiche($(this).attr("id"));
    });
    $('.clear').click(function(){
    	$('.clear').removeClass('clear').addClass('opaque');
    	$(this).removeClass('opaque').addClass('clear');
    	affiche($(this).attr("id"));
    });
});

function affiche(id){
	var nom = "#"+id+"div";
	$('.div').hide();
	$(nom).show('slow');
}