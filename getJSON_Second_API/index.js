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

const Url="https://free.currencyconverterapi.com/api/v6/convert"


function watchSubmit(){
$('.submit-button').click(function(){

  query = {
    // "school.degrees_awarded.predominant":"2,3",
    q: "USD_PHP,PHP_USD",
    compact: "ultra"
  }

  $.getJSON(Url, query, function(result){
    console.log(result);
    console.log(`${result.XCD.currencySymbol}`);

  });
})
}

$(`.submission-form`).submit(event => {
    event.preventDefault();
    let userSubmissionFrom = $(`#from`).val();
    console.log(userSubmissionFrom);

    let userSubmissionTo = $(`#to`).val();
    console.log(userSubmissionTo);

})

$(watchSubmit)

