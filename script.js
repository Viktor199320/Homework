
let imagini = [
    {
        imagine: 'Duruitoarea veche lacul costesti/Duruitoare veche.jpg',
        // link: "https://descopera.md/2022/11/17/duruitoarea-veche-si-lacul-costesti-stanca/target=_blank",
    },

    {
        imagine: 'milestii mici/milestii-mici-beciul.jpg',
        // link: "https://descopera.md/2022/11/03/vinaria-milestii-mici/ target=_blank",
    },

    {
        imagine: 'Epoca de piatra/Epoca de piatra1.jpg',
        // link: "https://descopera.md/2021/10/12/pivnitele-branesti/ target=_blank",
    },

    {
        imagine: 'Manuc bei/manuc-bey-conac.jpg',
        // link: 'https:/descopera.md/2022/02/03/totul-despre-conacul-manuc-bei/'
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

    let link = document.querySelector('.link')
    link.classList.add('link')
    img_div.insertAdjacentElement('afterend', link)

    // let link_div = document.createElement('div')
    // link_div.classList.add('text_links')
    // link_div.innerHTML = imagini1.link
    // article.insertAdjacentElement('beforeend', link_div)

    
    

    return article

}

let sections = document.querySelector('.sections')

for (const imagini1 of imagini) {
    let cardProdus = createProductCard(imagini1)
    sections.insertAdjacentElement('beforeend', cardProdus)

}

