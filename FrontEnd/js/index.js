const works = [
    {id: 1, title: 'Abajour Tahina', imageUrl: 'http://localhost:5678/images/abajour-tahina1651286843956.png', categoryId: 1, userId: 1},
    
    {id: 2, title: 'Appartement Paris V', imageUrl: 'http://localhost:5678/images/appartement-paris-v1651287270508.png', categoryId: 2, userId: 1},
    
    {id: 3, title: 'Restaurant Sushisen - Londres', imageUrl: 'http://localhost:5678/images/restaurant-sushisen-londres1651287319271.png', categoryId: 3, userId: 1},
    
    {id: 4, title: 'Villa “La Balisiere” - Port Louis', imageUrl: 'http://localhost:5678/images/la-balisiere1651287350102.png', categoryId: 2, userId: 1},
    
    {id: 5, title: 'Structures Thermopolis', imageUrl: 'http://localhost:5678/images/structures-thermopolis1651287380258.png', categoryId: 1, userId: 1},
    
    {id: 6, title: 'Appartement Paris X', imageUrl: 'http://localhost:5678/images/appartement-paris-x1651287435459.png', categoryId: 2, userId: 1},
    
    {id: 7, title: 'Pavillon “Le coteau” - Cassis', imageUrl: 'http://localhost:5678/images/le-coteau-cassis1651287469876.png', categoryId: 2, userId: 1},
    
    {id: 8, title: 'Villa Ferneze - Isola d’Elba', imageUrl: 'http://localhost:5678/images/villa-ferneze1651287511604.png', categoryId: 2, userId: 1},
    
    {id: 9, title: 'Appartement Paris XVIII', imageUrl: 'http://localhost:5678/images/appartement-paris-xviii1651287541053.png', categoryId: 2, userId: 1},
    
    {id: 10, title: 'Bar “Lullaby” - Paris', imageUrl: 'http://localhost:5678/images/bar-lullaby-paris1651287567130.png', categoryId: 3, userId: 1},
    
    {id: 11, title: 'Hotel First Arte - New Delhi', imageUrl: 'http://localhost:5678/images/hotel-first-arte-new-delhi1651287605585.png', categoryId: 3, userId: 1}
];


async function getWork () {
    let response = await fetch ("http://localhost:5678/api/works")
    let data = await response.json ()
    console.log (data)
}

const gallery = document.querySelector('.gallery')
gallery.innerHTML = ''

works.forEach(item => {
    const listItem = document.createElement('div')
    listItem.classList.add('item')

    const figure = document.createElement('figure')

    const image = document.createElement('img')

    image.src = item.imageUrl
    image.alt = item.title
    figure.appendChild(image)

    const figcaption = document.createElement('figcaption')
    figcaption.textContent = item.title

    figure.appendChild(figcaption)
    listItem.appendChild(figure)
    gallery.appendChild(listItem)
});

getWork()
 
