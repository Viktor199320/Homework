
let imagini = [
    {
        imagine: 'Duruitoarea veche lacul costesti/Duruitoare veche.jpg',
        link: 'Duruitoarea veche lacul costesti/Duruitoarea.html',
        titlu: 'Duruitoarea Veche și Lacul Costești-Stânca'
    },

    {
        imagine: 'milestii mici/milestii-mici-beciul.jpg',
        link: 'Milestii mici/Milestii.html',
        titlu: 'Vinăria Mileștii Mici'
    },

    {
        imagine: 'Epoca de piatra/Epoca de piatra1.jpg',
        link: 'Epoca de piatra/Epoca.html',
        titlu: 'Epoca de Piatră și Vinăria Brănești'
    },

    {
        imagine: 'Manuc bei/manuc-bey-conac.jpg',
        link: 'Manuc bei/Manuc_bei.html',
        titlu: 'Conacul Manuc Bei'
    },
];

function createProductCard(imagini1) {
    let article = document.createElement('article');

    let img_div = document.createElement('div');
    img_div.classList.add('img_centru');

    let img = document.createElement('img');
    img.classList.add('imagini');
    img.setAttribute('src', imagini1.imagine);

    img_div.appendChild(img);
    article.appendChild(img_div);

    //  Linkul este butonul
    let link = document.createElement('a');
    link.classList.add('destinatii', 'text_links');
    link.href = imagini1.link;
    link.textContent = imagini1.titlu;

    // Wrapper care centrează linkul
    let linkWrapper = document.createElement('div');
    linkWrapper.classList.add('link_wrapper')
    linkWrapper.appendChild(link);

    article.appendChild(linkWrapper);

    return article;
}

let sections = document.querySelector('.sections');

imagini.forEach((imagini1, index) => {
    let cardProdus = createProductCard(imagini1);
    sections.appendChild(cardProdus);

    // Adaugă clasa 'visible' după un mic delay pentru efectul de fade-in
    setTimeout(() => {
        cardProdus.classList.add('visible');
    }, index * 400); // Delay între carduri
})
