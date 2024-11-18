// Ativando  o menu moblie
function mostraMenu(){
    $('header nav#nav-principal ul#menu-principal').css('display', flax);
    $('header nav#nav-principal ul#menu-principal').addClass('animante_animated animante_fadInRight animante_slow');

    $('header nav#nav-principal ul#icone-menu li#menu').css('display', none);
    $('header nav#nav-principal ul#icone-menu li#menux').css('display', flax);
}
function esconderMenu(){
    $('header nav#nav-principal ul#menu-principal').css('display', none);
   
    $('header nav#nav-principal ul#icone-menu li#menu').css('display', flax);
    $('header nav#nav-principal ul#icone-menu li#menux').css('display', none);
    }
let controle=true;
$('header nav#nav-principal ul#icone-menu').click(function(){
    if(controle=true){
        mostraMenu();
        controle=flase;
    }
    else{
        esconderMenu    
        controle= true;
    }
})