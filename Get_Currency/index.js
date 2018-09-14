// //DO NOT DELETE!!!!!!!!!!!!!!!!!!!
// const Url="https://free.currencyconverterapi.com/api/v6/convert"


// function watchSubmit(){
// $('.btn').click(function(){

//   query = {
//     // "school.degrees_awarded.predominant":"2,3",
//     q: "USD_PHP,PHP_USD",
//     compact: "ultra"
//   }

//   $.getJSON(Url, query, function(result){
//     console.log(result);
//   });
// })
// }

// $(watchSubmit)

const Url="https://free.currencyconverterapi.com/api/v6/countries"

let countryListArray = [];

function watchSubmit(){
$('.submit-button').click(function(){

  query = {}

  $.getJSON(Url, query, function(data){
    //Object inside an Object inside and Object
    // console.log(data.results.AF) --> Displays keys and values from AF object;
    
    const results = data.results;

    for(let countryCode in results){
      console.log(results[countryCode].name)
      $(`#currency-choices`).append(`<option value="${results[countryCode].name}"> ${results[countryCode].name} </option>`);

    }

  });
})
}




$(`.currency-question-form`).submit(event => {
    event.preventDefault();
})

$(watchSubmit)

