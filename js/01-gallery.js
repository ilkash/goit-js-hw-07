import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')

function createLiItem(fotos) {
     return fotos
        .map(
        (foto) => `<li class="gallery__item">
  <a class="gallery__link" href="${foto.original}">
    <img
      class="gallery__image"
      src="${foto.preview}"
      data-source="${foto.original}"
      alt="${foto.description}"
    />
  </a>
</li>`
     )
    .join("")
}

const markur = createLiItem(galleryItems)
gallery.insertAdjacentHTML("afterbegin", markur)


gallery.addEventListener('click', onClickItem)
function onClickItem(event) {
    event.preventDefault();
   if (!event.target.classList.contains('gallery__image')) {
  return
  }
    //const import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
     instance.show()
     
     gallery.addEventListener('keydown', (event) => {
         if (event.code === "Escape") {
             instance.close();
             
         }
     });
 }


