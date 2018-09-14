const countryIdArray = [];
const currencyIdArray = [];

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
    console.log(countryChoice);
    
    function matchCurrencyId(){
    for(i=0; i<countryIdArray.length; i++){
      if(userSubmission === countryIdArray[i]){
        const currencyId = currencyIdArray[i]; 
        console.log(`The currency Id is: ${currencyId}`)
        getConverterApi(currencyId);     
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
    console.log(rate);
    const test = 40 * rate;
    console.log(`The conversion of $40 into your currency is ${test} ${currencyIdValue}`)
  }
}




// $(getConverterApi);

//__________________________________________________________________________________________________________________________________________


function handleFunctions(){
  getCountryApi();
}

$(handleFunctions);