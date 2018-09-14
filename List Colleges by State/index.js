const Url="https://api.data.gov/ed/collegescorecard/v1/schools.json"
let counter = 0;

function watchSubmit(){
$('.btn').click(function(){

  const query = {
    api_key: "8P336smWdRHaUwK6gjNbmGzeaoRDEqyIt16jEInQ",
    _fields: "school.name,school.state",
    _page:`${counter}`
  }

  $.getJSON(Url, query, getCollegesByState);
  counter++;
})
}

function backButton(){
    $('.backbtn').click(function(){
        counter--;
    })
}

function getCollegesByState(data){
    console.log(data.results);
}

$(watchSubmit)






















//DO NOT DELETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const Url="https://api.data.gov/ed/collegescorecard/v1/schools.json?school.degrees_awarded.predominant=2,3&_fields=id,school.name,2013.student.size&api_key=8P336smWdRHaUwK6gjNbmGzeaoRDEqyIt16jEInQ"


// function watchSubmit(){
// $('.btn').click(function(){
//   $.get(Url, function(result){
//     console.log(result.results[19]);
//   });
// })
// }

// $(watchSubmit)


