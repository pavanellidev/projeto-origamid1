// ativar links menu

const links = document.querySelectorAll('.header-menu a')

links.forEach((link) => {
  const url = location.href
  const href = link.href

  url.includes

  if (url.includes(href)) {
    link.classList.add('ativo')
  }
})

// ativar links do orçamento

const parametros = new URLSearchParams(location.search)

parametros.forEach((parametro) => {

  const elemento = document.getElementById(parametro)

  if(elemento) {
    elemento.checked = true
  }
  
})

// perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button')

function eventosPerguntas (pergunta) {
  pergunta.addEventListener('click', (e) => {
    const pergunta = e.currentTarget
    const controls = pergunta.getAttribute('aria-controls')
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('ativa')
    const ativa = resposta.classList.contains('ativa')
    console.log(ativa)
    pergunta.setAttribute('aria-expanded', ativa)
  })
}

perguntas.forEach(eventosPerguntas)

// Galeria de bicicletas

const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector('.bicicleta-imagens')

function eventosGaleria(img) {
  img.addEventListener('click', (e) => {
    const img = e.currentTarget
    const media = matchMedia('(min-width: 938px)').matches
    if (media) {
      galeriaContainer.prepend(img)
    }   
  })
}

galeria.forEach(eventosGaleria)

// Animação

if (window.SimpleAnime) {
  new SimpleAnime()
}
