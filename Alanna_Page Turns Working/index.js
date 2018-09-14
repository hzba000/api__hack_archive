const Url="https://api.data.gov/ed/collegescorecard/v1/schools.json?";
let counter = 0;

//EVENT LISTENER FOR FORM -- When user submits, store their query, and send query to getCollegesAPI() and watchSubmit()
function watchSubmit(){
  $('#js-search-form').submit(function(event) {
    event.preventDefault();
    const userSubmission = $('.js-search-box').val();
    $('.js-search-box').val('');
      getCollegesApi(userSubmission);
      forwardButton(userSubmission);
      backButton(userSubmission);
    });
}
//GET COLLEGES API() makes JSON call for data
//LOAD COLLEGES() takes data and renders it to screen
function getCollegesApi(searchTerm){
  query = {
        "school.name": `${searchTerm}`,
        _fields: "school.name,id",
        api_key: "8P336smWdRHaUwK6gjNbmGzeaoRDEqyIt16jEInQ",
        _page: `${counter}`,
        _per_page: "10"
  }
  $.getJSON(Url, query, loadColleges);


  function loadColleges(data){
    console.log(data.results);
    $(`.js-results-holder`).html('');
    for(i=0; i<data.results.length; i++){
      $(`<p> ${data.results[`${i}`][`school.name`]} </p>`).appendTo('.js-results-holder');
      } 
    } 
  }
$(getCollegesApi);

//___________________________________________________________________________
//Page Turns Added Here

//WHEN BUTTON CLICKED, make JSON call appropriate to page (controlled by counter)
function forwardButton(searchTerm){
  $('.btn').click(function(){
    counter++;
    getCollegesApi(searchTerm);
  })
}

function backButton(searchTerm){
  $('.backbtn').click(function(){
    counter--;
    counter = Math.max(counter, 0);
    getCollegesApi(searchTerm);
  })
}

//Very similar to loadColleges(), renders it to screen
function getCollegesByState(data){
    $('.js-results-holder').html('');
    for(i=0; i<data.results.length; i++){
      $(`<p> ${data.results[`${i}`][`school.name`]} </p>`).appendTo('.js-results-holder');
      }

    console.log(data.results);
}


$(watchSubmit)
