const countryIdArray = [];
const currencyIdArray = [];
let globalRate = 0;
let globalCurrencyId = null;

function getCountryApi(){
  const Url="https://free.currencyconverterapi.com/api/v6/countries"
  query = {}
  $.getJSON(Url, query, loadCountries);
}

function loadCountries(data){
  const results = data.results;
  for(let countryCode in results){
    $(`#country-choices`).append(`<option value="${results[countryCode].name}"> ${results[countryCode].name} </option>`);
    countryIdArray.push(results[countryCode].name);
    currencyIdArray.push(results[countryCode].currencyId);
  }
  watchSubmit(data);
}

function watchSubmit(data){
  $(`.country-question-form`).submit(event => {
    event.preventDefault();
    const userSubmission =  $(`#country-choices`).val();
    const countryChoice = userSubmission;
    console.log(`Country: ${countryChoice}`);
    
    function matchCurrencyId(){
    for(i=0; i<countryIdArray.length; i++){
      if(userSubmission === countryIdArray[i]){
        globalCurrencyId = currencyIdArray[i]; 
        console.log(`The currency Id is: ${globalCurrencyId}`)
        getConverterApi(globalCurrencyId);     
     }
    }}
    matchCurrencyId();
  })
}

//_________________________________________________________________________________________________________________________________________

function getConverterApi(currencyIdValue){
  const Url="https://free.currencyconverterapi.com/api/v6/convert"

  query = {
    q: `USD_${currencyIdValue}`,
    compact:"ultra"
  }
  $.getJSON(Url, query, testConversion);

  function testConversion(data){
    console.log(data);
    const rate = data[query.q];
    console.log(`The conversion rate is: ${rate}`);
    globalRate = rate;
    getCollegesApi();

  }
}

// $(getConverterApi);

//__________________________________________________________________________________________________________________________________________


function handleFunctions(){
  getCountryApi();
}

$(handleFunctions);

//Colleges start here________________________________________________________________________________________________________________________

function getCollegesApi(){
  const Url="https://api.data.gov/ed/collegescorecard/v1/schools.json?_fields=school.name,2015.cost.avg_net_price.private,2015.cost.avg_net_price.public&api_key=8P336smWdRHaUwK6gjNbmGzeaoRDEqyIt16jEInQ"
  query = {

  }
  $.getJSON(Url, query, loadColleges);

  function loadColleges(data){
  console.log(`${data.results["1"]["school.name"]}: ${data.results["1"]["2015.cost.avg_net_price.private"]}`);
  let college_tuition = data.results["1"]["2015.cost.avg_net_price.private"];
  console.log(college_tuition);
  console.log(`Converted tuition is: ${globalRate * college_tuition} ${globalCurrencyId}`);
} 
}


