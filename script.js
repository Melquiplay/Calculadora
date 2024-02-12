function calcular(a){
    var tela = document.querySelector(".tela").innerHTML;
    document.querySelector('.tela').innerHTML = tela + a
}
function apagar(){
    document.querySelector('.tela').innerHTML = ''
}
function voltar(){
    var tela = document.querySelector(".tela").innerHTML;
    document.querySelector('.tela').innerHTML = tela.substring(0, tela.length - 1);
}
function resu(){
    var tela = document.querySelector(".tela").innerHTML;
    document.querySelector('.tela').innerHTML = eval(tela);
}