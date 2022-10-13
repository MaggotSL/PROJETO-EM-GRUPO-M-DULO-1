let count = 1
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 6000)

function nextImage(){
    count++;
    if(count>4){
     count = 1
    }
    document.getElementById("radio"+count).checked = true;
}
function validar_form_contato (){
  var nome = formcontato.nome.value;
  var email= formcontato.email.value;
  var mensagem = formcontato.mensagem.value;

  if(nome == "") {
   alert("Informe o seu nome");
   formcontato.nome.focus();
   return false;
  }

  if(email == "") {
   alert("Informe um e-mail válido");
   formcontato.email.focus();
   return false;
  }
  
  if(mensagem == "") {
   alert("Esse campo é obrigatório");
   formcontato.mensagem.focus();
   return false;
  }
 }
