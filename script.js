
let imagini = [
    {
        imagine: 'https://descopera.md/wp-content/uploads/2022/11/IMG_20200501_154752-scaled.jpg',
        link: "https://descopera.md/2022/11/17/duruitoarea-veche-si-lacul-costesti-stanca/",
    },

    {
        imagine: 'https://descopera.md/wp-content/uploads/2022/11/milestii-mici.jpeg',
        link: "https://descopera.md/2022/11/03/vinaria-milestii-mici/ target=_blank",
    },

    {
        imagine: 'epoca-de-piatra.jpg',
        link: "https://descopera.md/2021/10/12/pivnitele-branesti/ target=_blank",
    },

    {
        imagine: 'manuc-bey-conac-hincesti-1024x578-1.jpg',
        link: "https://descopera.md/2022/02/03/totul-despre-conacul-manuc-bei/ target=_blank",
    },
] 

function createProductCard(imagini1) {

    let article = document.createElement('article')

    let img_div = document.createElement('div')
    img_div.classList.add('img_centru')

    let img = document.createElement('img')
    img.classList.add('imagini')
    img.setAttribute('src', imagini1.imagine)


    img_div.insertAdjacentElement('afterbegin', img )
    article.insertAdjacentElement('beforeend', img_div)

    let link_div = document.createElement('div')
    link_div.classList.add('text_links')
    link_div.innerHTML = imagini1.link
    article.insertAdjacentElement('beforeend', link_div)

    
    

    return article

}

let sections = document.querySelector('.sections')

for (const imagini1 of imagini) {
    let cardProdus = createProductCard(imagini1)
    sections.insertAdjacentElement('beforeend', cardProdus)

}

