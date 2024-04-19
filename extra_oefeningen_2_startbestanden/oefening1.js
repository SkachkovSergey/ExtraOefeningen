const vehicles = [
    {
        model: 'Mercedes AMG',
        license: 'B',
        odometer: 0,
        price: 240000,
        imgPath: 'mercedes-amg.jpg'
    },
    {
        model: 'Kawasaki Ninja 400',
        license: 'A',
        odometer: 11500,
        price: 5500,
        imgPath: 'kawasaki-ninja.jpg'
    },
    {
        model: 'Ford Mondeo',
        license: 'B',
        odometer: 14000,
        price: 30000,
        imgPath: 'ford-mondeo.jpeg'
    },

    {
        model: 'Ducati Panigale Superbike',
        license: 'A',
        odometer: 2499,
        price: 21999,
        imgPath: 'ducati-panigale.jpg'
    },
    {
        model: 'Ford Fiesta ST',
        license: 'B',
        odometer: 45124,
        price: 19999,
        imgPath: 'ford-fiesta-st.jpg'
    },
    {
        model: 'Ducati Panigale Superbike 2',
        license: 'A',
        odometer: 1000,
        price: 21999,
        imgPath: 'ducati-panigale.jpg'
    },
];

let heading = document.createElement('h1');
let headingText = document.createTextNode('Car finder');
heading.appendChild(headingText);
document.body.appendChild(heading);

let label = document.createElement('p');
let labelText = document.createTextNode('Driving license: ');
label.appendChild(labelText);
label.for = 'dropdown';
label.style.display = 'inline';
document.body.appendChild(label);//

let select = document.createElement('select');
select.id = 'dropdown';
select.name = 'category';

let optionAlle = document.createElement('option');
let optionAlleText = document.createTextNode('Alle');
optionAlle.appendChild(optionAlleText);
optionAlle.value = 'Alle';
select.appendChild(optionAlle);

let optionA = document.createElement('option');
let optionAText = document.createTextNode('A');
optionA.appendChild(optionAText);
optionA.value = 'A';
select.appendChild(optionA);

let optionB = document.createElement('option');
let optionBText = document.createTextNode('B');
optionB.appendChild(optionBText);
optionB.value = 'B';
select.appendChild(optionB);

document.body.appendChild(select);

document.getElementById('dropdown').addEventListener('change', showThePictures);

function showThePictures() {
    let selectedCategory = document.getElementById('dropdown').value;

    clearAdvertenties();

    switch(selectedCategory) {
        case 'A':
            showAdvertentie('A');
            break;
        case 'B':
            showAdvertentie('B');
            break;
        case 'Alle':
            showAdvertentie('Alle');
            break;
    }
}
function showAdvertentie(selectedCategory) {

    let container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);

    vehicles.forEach(vehicle => {
        if ((vehicle.license === 'A' && selectedCategory === 'A') ||
            (vehicle.license === 'B' && selectedCategory === 'B') ||
             selectedCategory === 'Alle') {

            let productCard = document.createElement('div');
            productCard.classList.add('vehicleContainer');

            const image = document.createElement('img');
            image.src = 'assets/' + vehicle.imgPath;
            image.alt = 'vehiclePhoto';

            const model = document.createElement('p');
            const modelText = document.createTextNode(vehicle.model);
            model.style.fontSize = '30px';
            model.style.padding = '30px';
            model.style.marginTop = '0';
            model.style.background = 'darkOrange';
            model.appendChild(modelText);

            const price = document.createElement('p');
            price.textContent = `Price: ${vehicle.price} EURO`;

            const odometer = document.createElement('p');
            const odometerText = document.createTextNode(`Odometer: ${vehicle.odometer} kilometers
            `);
            odometer.appendChild(odometerText);

            productCard.appendChild(image);
            productCard.appendChild(model);
            productCard.appendChild(price);
            productCard.appendChild(odometer);

            container.appendChild(productCard);

            if(vehicle.price > 20000) {
                price.style.color = 'darkOrange';
            }
        }
    });
}
function clearAdvertenties() {

    if(document.getElementById('container')) {
        document.getElementsByTagName('body')[0].
        removeChild(document.getElementById('container'));
    }
}

