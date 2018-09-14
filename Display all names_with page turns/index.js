let counter = 0;

function getCollegesApi(){
  const Url="https://api.data.gov/ed/collegescorecard/v1/schools.json?"
  query = {
        _fields: "school.name",
        api_key: "8P336smWdRHaUwK6gjNbmGzeaoRDEqyIt16jEInQ",
        _page: `${counter} `
  }
  $.getJSON(Url, query, loadColleges);
  
  function loadColleges(data){
  console.log(data.results.school.name);
  for(i=0; i<data.results.length; i++){
  $(`<p> ${data.results[`${i}`][`school.name`]} </p>`).appendTo('.js-results-holder');
  }
} 
}

$('#js-search-form').submit(function(event) {
    event.preventDefault();
    const userSubmission = $('.js-search-box').val();
    $('.js-search-box').val('');
    console.log(userSubmission);
    });


$(getCollegesApi);

//___________________________________________________________________________
//Page Turns Added Here

const Url="https://api.data.gov/ed/collegescorecard/v1/schools.json"

function watchSubmit(){
$('.btn').click(function(){

  const query = {
    api_key: "8P336smWdRHaUwK6gjNbmGzeaoRDEqyIt16jEInQ",
    _fields: "school.name,school.state",
    _page:`${counter}`
  }

  $.getJSON(Url, query, getCollegesByState);
  counter++;
  console.log(counter);
})

$('.backbtn').click(function(){
  
  counter--;
  counter = Math.max(counter, 0);
  const query = {
    api_key: "8P336smWdRHaUwK6gjNbmGzeaoRDEqyIt16jEInQ",
    _fields: "school.name,school.state",
    _page:`${counter}`
  }

  $.getJSON(Url, query, getCollegesByState);
  
  console.log(counter);
})

//math.Max


}

function getCollegesByState(data){
    console.log(data.results);
    $(`.js-results-holder`).html('');
    for(i=0; i<data.results.length; i++){
      $(`<p> ${data.results[`${i}`][`school.name`]} </p>`).appendTo('.js-results-holder');
      }
}

$(watchSubmit)




