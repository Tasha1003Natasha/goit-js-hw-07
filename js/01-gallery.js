import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.

// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
//  Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

// Посилання на gallery (отримали доступ до gallery з HTML)
const galleryContainer = document.querySelector(".gallery");
console.log(galleryContainer);

// Зміна, яка містить посилання на функцію створення зображень
const galleryMarkup = createGalleryItems(galleryItems);

// Підключення галереї після div class="gallery" в розмітці
galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

// Додавання слухача на всю галерею зображень
galleryContainer.addEventListener("click", handleClick);

// Лайфбокс
// const lightboxEl = document.querySelector('.lightbox');
// console.log(lightboxEl);
// const buttonEl = document.querySelector('[data-action="close-lightbox"]');
// console.log(buttonEl);

// Функція створення галереї зображень
function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
   <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    })
    .join("");
}

// Функція подія клік
function handleClick(event) {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    const imgLink = event.target.dataset.source;
    // console.log(imgLink);
    createModal(imgLink);
  }
}


// Модальне вікно
function createModal(link) {
  const instance = basicLightbox.create(
    `
	<img src="${link}"/>
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscape);
      },
     onClose: (instance) => {
        window.removeEventListener("keydown", onEscape);
     } 

    }
  );
  instance.show();

 
// Ф-ція закриття по Escape
  function onEscape(event) {
    // console.log(event.keyCode);
    if (event.keyCode === 27) {
      instance.close();
    }
  }
}

