'use strict'

const modal = document.getElementById('modal')
const image = document.getElementById('image')
const caption = document.getElementById('caption')

const width = window.matchMedia('(min-width: 715px)')

const maxi = img => {
  if (width.matches) {
    modal.style.display = 'block'
    image.src = img.src
    caption.innerHTML = img.alt
  }
}

const mini = () => {
  modal.style.display = 'none'
}
