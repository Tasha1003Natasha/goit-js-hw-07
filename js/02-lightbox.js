import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);


// Посилання на gallery (отримали доступ до gallery з HTML)
const galleryContainer = document.querySelector(".gallery");
console.log(galleryContainer);

// Зміна, яка містить посилання на функцію створення зображень
const galleryMarkup = createGalleryItems(galleryItems);

// Підключення галереї після div class="gallery" в розмітці
galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);


// Функція створення галереї зображень
function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    })
    .join("");
}


// Модальне вікно +  Функція подія клік

  let gallery = new SimpleLightbox(".gallery a",  { captionsData:`alt`, captionDelay:`250`});


