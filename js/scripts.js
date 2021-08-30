const baseURL = 'https://api.covid19api.com/total/dayone/country/';

const search = (ev) => {
    const term = document.querySelector('#search').value;
    getCases(term);
    if (ev) {
        ev.preventDefault();
    }
}
document.querySelector('#search').onkeyup = (ev) => {
    //console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const getCases = (term) => {
    url= baseURL + term;
    fetch(url)
     .then(response=>response.json())
     .then(data=>{
        if (data.length==0){
            document.querySelector("#cases").innerHTML=``;
            document.querySelector("#deaths").innerHTML=``;
            document.querySelector("#active").innerHTML=``;
            document.querySelector("#recover").innerHTML=``;
        }
        else{
            template1=`<b>${numberWithCommas(data[data.length-1].Confirmed)}</b> 
            <small>(+${numberWithCommas(data[data.length-1].Confirmed-data[data.length-2].Confirmed)})</small>`;
            document.querySelector("#cases").innerHTML=template1;
            template2=`<b>${numberWithCommas(data[data.length-1].Deaths)}</b> 
            <small>(+${numberWithCommas(data[data.length-1].Deaths-data[data.length-2].Deaths)})</small>` ;
            document.querySelector("#deaths").innerHTML=template2;
            template3=`<b>${numberWithCommas(data[data.length-1].Recovered)}</b> 
            <small>(+${numberWithCommas(data[data.length-1].Recovered-data[data.length-2].Recovered)})</small>`;
            document.querySelector("#recover").innerHTML=template3;
            template4=`<b>${data[data.length-1].Country}</b>`;
            document.querySelector("#country").innerHTML=template4;
        }
        console.log(data.Country)
     })
};
