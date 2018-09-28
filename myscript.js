function findCountry (){
  var response;
  var searchCountry = searchPlace.value;
  if (searchCountry == "Norway" || searchCountry == "norway" || searchCountry == "Iceland" ||searchCountry == "iceland" || searchCountry == "Denmark" || searchCountry == "denmark" || searchCountry == "Sweden" ||searchCountry == "sweden" || searchCountry == "New Zealand" || searchCountry == "new zealand" || searchCountry == "Austria" || searchCountry == "austria" || searchCountry == "Cambodia" || searchCountry == "cambodia" || searchCountry == "Hong Kong" || 
searchCountry == "hong kong" ||searchCountry == "Vietnam" || 
searchCountry == "vietnam" || searchCountry =="Cyprus" ||searchCountry =="cyprus" || searchCountry == "Greece" || searchCountry == "greece" || searchCountry == "Lithuania" ||searchCountry == "lithuania" || searchCountry == "Poland" || searchCountry == "poland" ||searchCountry == "Malaysia"||searchCountry == "malaysia"||searchCountry == "Turkey"||searchCountry == "turkey"){
    response = "I would like to visit!";
document.getElementById("message").innerHTML = response;
  } else if(searchCountry == "Japan" || searchCountry == "japan" ||searchCountry == "Korea" || searchCountry == "korea" ||searchCountry == "Canada" || searchCountry == "canada" ||searchCountry == "Spain" || searchCountry == "spain" ||searchCountry == "India" || searchCountry == "india" ||searchCountry == "France" || searchCountry == "france" ||searchCountry == "Netherlands" || searchCountry == "netherlands" ||searchCountry == "Italy" || searchCountry == "italy" ||searchCountry == "Germany" || searchCountry == "germany" ||searchCountry == "Finland" || searchCountry == "finland"){
    response = "I've been, but there are always new places to discover!";
document.getElementById("message").innerHTML = response;
  }else {
    response = "Never thought about it! Tell me more!";    document.getElementById("message").innerHTML = response;
  }
}

