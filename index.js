const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];
// Función para buscar una pizza por su ID
function getPizzaByID(id) {
  return pizzas.find(pizza => pizza.id === id);
}

// PASO: 3 Función para renderizar una pizza en el contenedor
function renderPizza(pizza) {
  const resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = `
    <div class="card">

    <h2>${pizza.nombre}</h2>
      <img src="${pizza.imagen}" alt="${pizza.nombre}">
      
      <p class="price">Precio: $${pizza.precio}</p>
    </div>
  `;
}

//PASO 2: Evento al hacer clic en el botón de búsqueda
document.getElementById('searchButton').addEventListener('click', function () {
  const numberInput = document.getElementById('pizzaIdInput').value;
  const idPizza = parseInt(numberInput);

  if (!isNaN(idPizza)) {
    const foundPizza = getPizzaByID(idPizza);

    if (foundPizza) {
      renderPizza(foundPizza);

      // Guardar la última pizza buscada en LocalStorage

      localStorage.setItem('lastPizzaSearched', JSON.stringify(foundPizza));

      //PASO 4 y 5:
    } else {
      resultContainer.innerHTML = '<p class="error">No se encontró ninguna pizza con ese ID.</p>';
    }
  } else {
    resultContainer.innerHTML = '<p class="error">Por favor, ingresa un número válido.</p>';
  }
});

// PASO 7: Verificar si hay una última pizza buscada en LocalStorage al cargar la página
document.addEventListener('DOMContentLoaded', function () {
  const lastPizzaSearched = JSON.parse(localStorage.getItem('lastPizzaSearched'));

  if (lastPizzaSearched) {
    renderPizza(lastPizzaSearched);
  }

});