const countries = ["japan", "korea", "canada", "france", "finland", "india", "germany", "netherlands", "italy", "spain", "hungary", "czech republic", "austria", "slovakia", "greece", "portugal", "jersey"]
const wantToVisit = ["norway", "sweden", "egypt", "malaysia", "thailand", "mexico", "colombia", "new zealand", "fiji", "lithuania", "poland", "hong kong", "georgia", "vietnam", "armenia", "cyprus", "turkey", "cambodia", "denmark", "iceland", "iran", "jordan"]

const visited = document.querySelector('.visited-list');
const allCountries = countries.map(country => {
  return '<li>' + country + '</li>';
}).join('');
visited.innerHTML = allCountries;

const planning = document.querySelector('.planning-list');
const plannedCountries = wantToVisit.map(country => {
  return '<li>' + country + '</li>';
}).join('');
planning.innerHTML = plannedCountries;


const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener('click', findCountry)


function findCountry() {
  const response = document.getElementById('message');
  let searchedCountry = document.getElementById('searchPlace').value.toLowerCase();
  const firstLetterCapitalized = capitalizeFirstLetter(searchedCountry)
  if (countries.includes(searchedCountry)) {
    response.innerHTML = `I have visited ${firstLetterCapitalized}`
  } else if (wantToVisit.includes(searchedCountry)) {
    response.innerHTML = `${firstLetterCapitalized} is on my list of places to visit!`
  }
  else {
    response.innerHTML = `I have not yet visited ${firstLetterCapitalized}. Tell me about it!`
  }
}

function capitalizeFirstLetter(string) {
  if (typeof string == undefined) return;
  const firstLetter = string[0] || string.charAt(0);
  return firstLetter ? firstLetter.toUpperCase() + string.slice(1) : '';
}