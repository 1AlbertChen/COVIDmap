const baseURL = 'https://api.covid19api.com/total/dayone/country/';

const countries = ['United States','China','UK']
const countrySet = new Set()
for (let item of countries) countrySet.add(item)

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
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const getCases = (term) => {
    url= baseURL + term;
    fetch(url)
     .then(response=>response.json())
     .then(data=>{
        if (data.length==0){
            $("#cases").html('');
            $("#deaths").html('');
        }
        else{
            var thisDay = data[data.length-1]
            var lastDay = data[data.length-2]
            var country = thisDay.Country
            var cases = numberWithCommas(thisDay.Confirmed)
            var deaths = numberWithCommas(thisDay.Deaths)
            var newCases = numberWithCommas(thisDay.Confirmed - lastDay.Confirmed)
            var newDeaths = numberWithCommas(thisDay.Deaths - lastDay.Deaths)

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


for (let item of countrySet){
    countryURL= baseURL + item;
    fetch(countryURL)
        .then(response=>response.json())
        .then(data=>{
            var thisDay = data[data.length-1]
            var lastDay = data[data.length-2]
            var country = thisDay.Country
            var cases = numberWithCommas(thisDay.Confirmed)
            var deaths = numberWithCommas(thisDay.Deaths)
            var newCases = numberWithCommas(thisDay.Confirmed - lastDay.Confirmed)
            var newDeaths = numberWithCommas(thisDay.Deaths - lastDay.Deaths)
            $("#carousel-frame").append(`<div class="carousel-item text-white"><b>${country}</b><b class="text-secondary"> | Cases: </b><b style="color:red;">${cases} </b><small style="color:red;">(+${newCases})</small><b class="text-secondary"> Deaths: </b><b>${deaths} </b><small>(+${newDeaths})</small>`)
        });
}



