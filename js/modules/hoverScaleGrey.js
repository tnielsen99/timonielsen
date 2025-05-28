export default function hoverScaleGrey() {
    const allImages = document.querySelectorAll('.filter-normal');

    // applyAll active class from all images
    function applyAll() {
        for (let i = 0; i < allImages.length; i++)
            allImages[i].className = 'active';
    }
    // removeAll active class from all images
    function removeAll() {
        for (let i = 0; i < allImages.length; i++)
            allImages[i].className = '';
    }

    // adds active class to the clicked link, 
    // but before it removes it from all other links
    for (let i = 0; i < allImages.length; i++) {
        allImages[i].addEventListener('mouseenter', event => {
            applyAll();
            allImages[i].className = '';
        });

        allImages[i].addEventListener('mouseleave', event => {
            removeAll();
        })
    }

}