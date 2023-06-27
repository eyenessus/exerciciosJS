const galleryItem = document.querySelectorAll(".gallery-item")
const lightbox = document.querySelector('.lightbox');
const lightboxItem = document.querySelector('.lightbox-image')
const lightboxClose = document.querySelector('.lightbox-close')
galleryItem.forEach((item) => {
    item.addEventListener('click', () => {
        console.log(item)
        const imageUrl = item.querySelector('.gallery-image').getAttribute("data-src")
        console.log(imageUrl)
        lightboxItem.setAttribute("src",imageUrl)
        lightbox.style.display = "flex";
    });
})
lightboxClose.addEventListener('click',()=>{
    lightbox.style.display = "none";
})