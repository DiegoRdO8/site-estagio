$(document).ready(() => {
  $('.detalhecao').hide();
    $('.botaodetalhes').on('click', event => {
        $('.detalhecao').toggle()
      });
});
$('#apresentando').hide();
var btnenviar = document.querySelector('#btn_enviar');
  btnenviar.addEventListener('click', function(event){
    event.preventDefault();
    $('#adogcao').hide();  
    var formulario = document.querySelector('#adogcao');
    console.log(formulario);
    var nome = formulario.nome.value;
    var quantos = formulario.quantos.value;
    var idadeCao = formulario.idade.value;
    var ident = formulario.ident.value;
    var raca = formulario.raca.value;
    var extra = formulario.extra.value;

    console.log('Seu nome : '+nome);
    console.log('Quantos na casa : '+quantos);
    console.log('Faixa de idade do pet : '+idadeCao);
    console.log('Faixa de idade do pet : '+ident);
    console.log('Raça de preferencia: '+raca);
    console.log('Mais informações: '+extra);

    var linha = document.createElement('p');

    var celulaNome = document.createElement('p');
    var celulaQuantos = document.createElement('p');
    var celulaIdadeCao = document.createElement('p');
    var celulaRaca = document.createElement('p');
    var celulaIdent = document.createElement('p');
    var celulaExtra = document.createElement('p');

    celulaNome.textContent = formulario.nome.value;
    celulaQuantos.textContent = formulario.quantos.value;
    celulaIdadeCao.textContent = formulario.idade.value;
    celulaRaca.textContent = formulario.raca.value;
    celulaIdent.textContent = formulario.ident.value;
    celulaExtra.textContent = formulario.extra.value;

    var tabelaForm = document.querySelector('#apresentando');//.querySelector('tbody')

    linha.appendChild(celulaNome);
    linha.appendChild(celulaQuantos);
    linha.appendChild(celulaIdadeCao);
    linha.appendChild(celulaRaca);
    linha.appendChild(celulaIdent);
    linha.appendChild(celulaExtra);
    tabelaForm.appendChild(linha);

    $('#apresentando').show();
  })

  const imgs = document.getElementById("imgca");
  const img = document.querySelectorAll("#imgca img");

  let idx = 0;

  function carrousel(){
    idx++;

    if(idx > img.length-1){
      idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 700}px)`;
  }

  setInterval(carrousel, 1800);