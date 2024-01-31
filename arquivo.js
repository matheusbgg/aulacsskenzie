const fechar 
= document.querySelector ('.fear')

const modal 
= document.querySelector('.modal')

const botao
= document.querySelector('.botao-1')

botao.addEventListener('click', () => {
  modal.showModal();
})

fechar.addEventListener('click', () => {
  modal.close();
})
