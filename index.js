// // https://restcountries.com/v3.1/all

// const input = document.getElementById("inputSearch");
// const result = document.querySelector(".countries-container");
// const btnCroissant = document.getElementById("minToMax");
// const btnDecroissant = document.getElementById("maxToMin");
// const btnAlphabetique = document.getElementById("alpha");
// let allCountry = [];

// const fetchCountry = async () => {
//   await fetch("https://restcountries.com/v3.1/all")
//     .then((res) => res.json())
//     .then((data) => (allCountry = data));

//   allCountry.length = inputRange.value;
//   rangeValue.innerHTML = `${allCountry.length}`;

//   result.innerHTML = "";

//   for (let i = 0; i < allCountry.length; i++) {
//     result.innerHTML += `<div class="card"> 
//     <img src="${allCountry[i].flags.png}"> 
//     <h1> ${allCountry[i].translations.fra.common} </h1> 
//     <p> ${allCountry[i].capital}</p>
//     <span>Population : ${allCountry[i].population.toLocaleString()} </span>
//     </div>`;
//   }
// };

// const displayLive = async (value) => {
//   if (value) {
//     result.innerHTML = "";
//     const searchValue = value.toLowerCase();
//     await fetch("https://restcountries.com/v3.1/name/" + searchValue)
//       .then((res) => res.json())
//       .then((data) => (allCountry = data));

//     for (let i = 0; i < allCountry.length; i++) {
//       result.innerHTML += `<div class="card">
//             <img src="${allCountry[i].flags.png}"> 
//             <h1> ${allCountry[i].translations.fra.common.toLowerCase()} </h1> 
//             <p> ${allCountry[i].capital}</p>
//             <span>Population : ${allCountry[i].population.toLocaleString()} </span>
//             </div>`;
//     }
//     console.log(allCountry);
//   }
//   if (allCountry.message === "Not Found") {
//     result.innerHTML = "<p>Aucun résultat</p>";
//   }
// };

// const sortCountriesByPopulation = (sortOrder) => {
//   let populationSort = [];

//   for (let i = 0; i < allCountry.length; i++) {
//     populationSort.push(allCountry[i].population);
//   }

//   populationSort.sort((a, b) => (sortOrder === "asc" ? a - b : b - a));
//   result.innerHTML = "";

//   for (let i = 0; i < allCountry.length; i++) {
//     const country = allCountry.find((c) => c.population === populationSort[i]);

//     result.innerHTML += `<div class="card"> 
//       <img src="${country.flags.png}"> 
//       <h1>${country.translations.fra.common}</h1> 
//       <p>${country.capital}</p>
//       <span>Population: ${country.population.toLocaleString()}</span>
//       </div>`;
//   }
// };

// const sortCountriesByAlphab = () => {
//   let nameCountry = [];

//   for (let i = 0; i < allCountry.length; i++) {
//     nameCountry.push(allCountry[i].translations.fra.common);
//   }
//   nameCountry.sort();
//   result.innerHTML = "";

//   for (let i = 0; i < allCountry.length; i++) {
//     const country = allCountry.find(
//       (country) => country.translations.fra.common === nameCountry[i]
//     );

//     result.innerHTML += `<div class="card"> 
//       <img src="${country.flags.png}"> 
//       <h1>${country.translations.fra.common}</h1> 
//       <p>${country.capital}</p>
//       <span>Population: ${country.population.toLocaleString()}</span>
//       </div>`;
//   }
// };

// btnCroissant.addEventListener("click", () => sortCountriesByPopulation("asc"));
// btnDecroissant.addEventListener("click", () =>
//   sortCountriesByPopulation("desc")
// );
// btnAlphabetique.addEventListener("click", sortCountriesByAlphab);
// inputRange.addEventListener("input", fetchCountry);
// window.addEventListener("DOMContentLoaded", fetchCountry);
// input.addEventListener("input", (e) => {
//   displayLive(e.target.value);
// });



const countriesContainer = document.querySelector(".countries-container");
const btnSort = document.querySelectorAll(".btnSort");
let countriesData = [];
let sortMethod = "maxToMin";

async function fetchCountries() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countriesData = data));

  console.log(countriesData);
  countriesDisplay();
}

function countriesDisplay() {
  countriesContainer.innerHTML = countriesData
    .filter((country) =>
      country.translations.fra.common
        .toLowerCase()
        .includes(inputSearch.value.toLowerCase())
    )
    .sort((a, b) => {
      if (sortMethod === "maxToMin") {
        return b.population - a.population;
      } else if (sortMethod === "minToMax") {
        return a.population - b.population;
      } else if (sortMethod === "alpha") {
        return a.translations.fra.common.localeCompare(
          b.translations.fra.common
        );
      }
    })
    .slice(0, inputRange.value)
    .map(
      (country) =>
        `
          <div class="card">
            <img src=${country.flags.svg} alt="drapeau ${
          country.translations.fra.common
        }" > 
            <h2>${country.translations.fra.common}</h2>
            <h4>${country.capital}</h4>
            <p>Population : ${country.population.toLocaleString()}</p>
          </div>
        `
    )
    .join("");
}

window.addEventListener("load", fetchCountries);
inputSearch.addEventListener("input", countriesDisplay);

inputRange.addEventListener("input", () => {
  countriesDisplay();
  rangeValue.textContent = inputRange.value;
});

btnSort.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    sortMethod = e.target.id;
    countriesDisplay();
  });
});
