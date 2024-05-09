const provinciasSelect = document.getElementById('inputProvincia');
const paisesSelect = document.getElementById('inputPais');

const paisProvincia = [
    { Nombre : "Argentina" , Provincias : [
        "Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Ciudad Autónoma de Buenos Aires",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán"
    ]},
    {
        Nombre : "España", Provincias : ["Álava",
        "Albacete",
        "Alicante",
        "Almería",
        "Asturias",
        "Ávila",
        "Badajoz",
        "Barcelona",
        "Burgos",
        "Cáceres",
        "Cádiz",
        "Cantabria",
        "Castellón",
        "Ciudad Real",
        "Córdoba",
        "Cuenca",
        "Gerona",
        "Granada",
        "Guadalajara",
        "Guipúzcoa",
        "Huelva",
        "Huesca",
        "Islas Baleares",
        "Jaén",
        "La Coruña",
        "La Rioja",
        "Las Palmas",
        "León",
        "Lérida",
        "Lugo",
        "Madrid",
        "Málaga",
        "Murcia",
        "Navarra",
        "Orense",
        "Palencia",
        "Pontevedra",
        "Salamanca",
        "Santa Cruz de Tenerife",
        "Segovia",
        "Sevilla",
        "Soria",
        "Tarragona",
        "Teruel",
        "Toledo",
        "Valencia",
        "Valladolid",
        "Vizcaya",
        "Zamora",
        "Zaragoza"]
    } ,
    { Nombre : "Uruguay", Provincias : ["Artigas",
    "Canelones",
    "Cerro Largo",
    "Colonia",
    "Durazno",
    "Flores",
    "Florida",
    "Lavalleja",
    "Maldonado",
    "Montevideo",
    "Paysandú",
    "Río Negro",
    "Rivera",
    "Rocha",
    "Salto",
    "San José",
    "Soriano",
    "Tacuarembó",
    "Treinta y Tres"]}
];

document.addEventListener('DOMContentLoaded', ()=> { // DOM espera a que se descargue el html, no espera al css o imagenes, para poder ejecutar este codigo necesitamos que el html este cargado
    for (let i = 0; i < paisProvincia.length; i++) {
        const option = document.createElement('option');
        option.textContent = paisProvincia[i].Nombre;
        paisesSelect.appendChild(option);
    }
});

paisesSelect.addEventListener('change', () => {
    // limpiamos las opciones anteriores
    provinciasSelect.innerHTML = '';
    const paisSeleccionado = paisProvincia.find(country => country.Nombre === paisesSelect.value);

    const provincias = paisSeleccionado.Provincias;
    
    // agregamos las opciones de provincia al select
    provincias.forEach(provincia => {
        const option = document.createElement('option');
        option.textContent = provincia;
        provinciasSelect.appendChild(option);
    });
});