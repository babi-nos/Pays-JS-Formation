// https://restcountries.com/v3.1/all

const input = document.getElementById("inputSearch");
const result = document.querySelector(".countries-container");
const btnCroissant = document.getElementById("minToMax");
const btnDecroissant = document.getElementById("maxToMin");
const btnAlphabetique = document.getElementById("alpha");
let allCountry = [];

const fetchCountry = async () => {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (allCountry = data));

  allCountry.length = inputRange.value;
  console.log(allCountry.length);
  rangeValue.innerHTML = `${allCountry.length}`;

  result.innerHTML = "";

  for (let i = 0; i < allCountry.length; i++) {
    result.innerHTML += `<div class="card"> 
    <img src="${allCountry[i].flags.png}"> 
    <h1> ${allCountry[i].name.common} </h1> 
    <p> ${allCountry[i].capital}</p>
    <span>Population : ${allCountry[i].population} </span>
    </div>`;
  }
};

const displayLive = async (value) => {
  if (value) {
    result.innerHTML = "";
    await fetch("https://restcountries.com/v3.1/name/" + value)
      .then((res) => res.json())
      .then((data) => (allCountry = data));

    for (let i = 0; i < allCountry.length; i++) {
      result.innerHTML += `<div class="card">
            <img src="${allCountry[i].flags.png}"> 
            <h1> ${allCountry[i].name.common} </h1> 
            <p> ${allCountry[i].capital}</p>
            <span>Population : ${allCountry[i].population} </span>
            </div>`;
    }
  }
  if (allCountry.message === "Not Found") {
    console.log("errere");
    result.innerHTML = "<p>Aucun résultat</p>";
    allCountry.length = 24;
  }
  console.log(allCountry.message);
};

const sortCountriesByPopulation = (sortOrder) => {
  let populationSort = [];

  for (let i = 0; i < allCountry.length; i++) {
    populationSort.push(allCountry[i].population);
  }

  populationSort.sort((a, b) => (sortOrder === "asc" ? a - b : b - a));
  result.innerHTML = "";

  for (let i = 0; i < allCountry.length; i++) {
    const country = allCountry.find((c) => c.population === populationSort[i]);

    result.innerHTML += `<div class="card"> 
      <img src="${country.flags.png}"> 
      <h1>${country.name.common}</h1> 
      <p>${country.capital}</p>
      <span>Population: ${country.population}</span>
      </div>`;
  }
};

const sortCountriesByAlphab = () => {
  let nameCountry = [];

  for (let i = 0; i < allCountry.length; i++) {
    nameCountry.push(allCountry[i].name.common);
  }
  nameCountry.sort();
  result.innerHTML = "";

  for (let i = 0; i < allCountry.length; i++) {
    const country = allCountry.find((country) => country.name.common === nameCountry[i]);

    result.innerHTML += `<div class="card"> 
      <img src="${country.flags.png}"> 
      <h1>${country.name.common}</h1> 
      <p>${country.capital}</p>
      <span>Population: ${country.population}</span>
      </div>`;
  }

  console.log();
};

btnCroissant.addEventListener("click", () => sortCountriesByPopulation("asc"));
btnDecroissant.addEventListener("click", () =>
  sortCountriesByPopulation("desc")
);
btnAlphabetique.addEventListener("click", sortCountriesByAlphab);
inputRange.addEventListener("input", fetchCountry);

document.addEventListener("DOMContentLoaded", fetchCountry);

input.addEventListener("input", (e) => {
  displayLive(e.target.value);
});
