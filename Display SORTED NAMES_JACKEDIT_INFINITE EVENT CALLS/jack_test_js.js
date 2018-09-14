const Url="https://api.data.gov/ed/collegescorecard/v1/schools.json?";
let counter = 0;
let searchTerm = null;

function getCollegesApi(){
  
  // query = {
  //       "school.name": `${searchTerm}`,
  //       _fields: "school.name,id",
  //       api_key: "8P336smWdRHaUwK6gjNbmGzeaoRDEqyIt16jEInQ",
  //       _page: `${counter}`,
  //       _per_page: "10"
  // }
  // $.getJSON(Url, query, loadColleges);

  // console.log(searchTerm);
  watchSubmit();
  $('#js-search-form').submit(function(event) {
    event.preventDefault();
    searchTerm = $('.js-search-box').val();
    $('.js-search-box').val('');
    // getCollegesApi(userSubmission);
    // watchSubmit(userSubmission);
    query = {
      "school.name": `${searchTerm}`,
      _fields: "school.name,id",
      api_key: "8P336smWdRHaUwK6gjNbmGzeaoRDEqyIt16jEInQ",
      _page: `${counter}`,
      _per_page: "10"
}
$.getJSON(Url, query, loadColleges);

    });

  function loadColleges(data){
    console.log(data.results);
    $(`.js-results-holder`).html('');
    for(i=0; i<data.results.length; i++){
      $(`<p> ${data.results[`${i}`][`school.name`]} </p>`).appendTo('.js-results-holder');
      }
    
    
} 
}

// $('#js-search-form').submit(function(event) {
//     event.preventDefault();
//     const userSubmission = $('.js-search-box').val();
//     $('.js-search-box').val('');
//     // console.log(userSubmission);
//     });


$(getCollegesApi);

//___________________________________________________________________________
//Page Turns Added Here

function watchSubmit(){
  $('.btn').click(function(){
    counter++;

    const query = {
      "school.name": `${searchTerm}`,
      _fields: "school.name,id",
      api_key: "8P336smWdRHaUwK6gjNbmGzeaoRDEqyIt16jEInQ",
      _page: `${counter}`,
      _per_page: "10"
    }
  
    $.getJSON(Url, query, getCollegesByState);
    console.log(counter);
  })
  
  $('.backbtn').click(function(){
    counter--;
    counter = Math.max(counter, 0);
    const query = {
      "school.name": `${searchTerm}`,
      _fields: "school.name,id",
      api_key: "8P336smWdRHaUwK6gjNbmGzeaoRDEqyIt16jEInQ",
      _page: `${counter}`,
      _per_page: "10"
    }
  
    $.getJSON(Url, query, getCollegesByState);
    
    console.log(counter);
  })
  
  //math.Max
  
  }
  
  
  function getCollegesByState(data){
      console.log(data.results);
      $('.js-results-holder').html('');
      for(i=0; i<data.results.length; i++){
        $(`<p> ${data.results[`${i}`][`school.name`]} </p>`).appendTo('.js-results-holder');
        }
  }
  
  $(watchSubmit)



