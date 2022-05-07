const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryImages = document.querySelector(".gallery");
console.log(galleryImages);
const galleryItems = images
  .map((image) => `<li><img src=${image.url} alt=${image.alt} /></li>`)
  .join("");
console.log(galleryItems);
galleryImages.insertAdjacentHTML("afterbegin", galleryItems);

// galleryImages.style;

const markupStyles = `<style>
.gallery {
   display: flex
  }
  img {
   width: 320px; height: 240px
  }
 ul {
   list-style: none
  }
  
 ul > li:not(:last-child) {
   margin-right: 20px;
  }
   </style>`;
galleryImages.insertAdjacentHTML("afterend", markupStyles);