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

// Додавання слухача на всю галерею зображень
galleryContainer.addEventListener("click", handleClick);

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

// Функція подія клік
function handleClick(event) {
  event.preventDefault();
  console.dir(event.target);
  if (event.target.nodeName === "IMG") {
    const imgLink = event.target.dataset.source;
    createModal(imgLink);
  }
}

// Модальне вікно
function createModal(link) {
  let gallery = new SimpleLightbox(".gallery a",  { captionsData:`alt`, captionDelay:`250`});
  gallery.on("show.simplelightbox", function () {});
}

