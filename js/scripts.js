const baseURL = 'https://api.covid19api.com/total/dayone/country/';

const search = (ev) => {
    const term = $('#search').val();
    getCases(term);
    if (ev) {
        ev.preventDefault();
    }
}
$('#search').keyup(function( event ) {
    if ( event.which == 13 ) {
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
            template1=`<b>${numberWithCommas(data[data.length-1].Confirmed)}</b> 
            <small>(+${numberWithCommas(data[data.length-1].Confirmed-data[data.length-2].Confirmed)} today)</small>`;
            $("#cases").html(template1);
            template2=`<b>${numberWithCommas(data[data.length-1].Deaths)}</b> 
            <small>(+${numberWithCommas(data[data.length-1].Deaths-data[data.length-2].Deaths)} today)</small>` ;
            $("#deaths").html(template2);
            template3=`<b>${data[data.length-1].Country}</b>`;
            $("#country").html(template3);
        }
     })
};



