const baseURL = 'https://data.cdc.gov/resource/9mfq-cb36.json?submission_date=';

const countries = ['CA','TX','FL','NY','PA'];
const countrySet = new Set();
for (let item of countries) countrySet.add(item);

var d = new Date();
d.setDate(d.getDate()-3)
var dd = String(d.getDate()).padStart(2, '0');
var mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = d.getFullYear();

var lastDay = yyyy + '-' + mm + '-' + dd;


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

for (let item of countrySet){
    url= baseURL+ lastDay + '&state=' + item;
    fetch(url)
        .then(response=>response.json())
        .then(data=>{
            var cases = numberWithCommas(data[0].tot_cases)
            var deaths = numberWithCommas(data[0].tot_death)
            var newCases = parseInt(numberWithCommas(data[0].new_case))
            var newDeaths = parseInt(numberWithCommas(data[0].new_death))
            var country = abbrState(data[0].state,'name')
            $("#carousel-frame").append(`<div class="carousel-item text-white" data-bs-interval="3000"><b>${country}</b><b class="text-secondary"> | Cases: </b><b style="color:red;">${cases} </b><small style="color:red;">(+${newCases})</small><b class="text-secondary"> Deaths: </b><b>${deaths} </b><small>(+${newDeaths})</small>`)
        });
}
    

const search = (ev) => {
    const term = $('#search').val();
    getCases(term);
    if (ev) {
        ev.preventDefault();
    }
}
$('#search').keyup(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      search();
    }
  });

const getCases = (term) => {
    var stateCode = abbrState(term, 'abbr')
    url= baseURL+ lastDay + '&state=' + stateCode;
    console.log(url)
    fetch(url)
     .then(response=>response.json())
     .then(data=>{
        if (data.length==0){
            $("#cases").html('');
            $("#deaths").html('');
            $("#country").html('');
        }
        else{
            var cases = numberWithCommas(data[0].tot_cases)
            var deaths = numberWithCommas(data[0].tot_death)
            var newCases = parseInt(numberWithCommas(data[0].new_case))
            var newDeaths = parseInt(numberWithCommas(data[0].new_death))
            var country = abbrState(data[0].state,'name')
            template1=`<b>${cases}</b> 
            <small>(+${newCases})</small>`;
            $("#cases").html(template1);
            template2=`<b>${deaths}</b> 
            <small>(+${newDeaths})</small>` ;
            $("#deaths").html(template2);
            template3=`<b>${country}</b>`;
            $("#country").html(template3);
            if (!countrySet.has(country)){
                countrySet.add(country)
                $("#carousel-frame").append(`<div class="carousel-item text-white"><b>${country}</b><b class="text-secondary"> | Cases: </b><b style="color:red;">${cases} </b><small style="color:red;">(+${newCases})</small><b class="text-secondary"> Deaths: </b><b>${deaths} </b><small>(+${newDeaths})</small>`)
            }
            
        }
     });
};





