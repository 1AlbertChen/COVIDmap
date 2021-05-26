const baseURL = 'https://api.covid19api.com/total/dayone/country/';

const search = (ev) => {
    const term = document.querySelector('#search').value;
    getCases(term);
    if (ev) {
        ev.preventDefault();
    }
}
document.querySelector('#search').onkeyup = (ev) => {
    console.log(ev.keyCode);
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
            template1=`<h2>${numberWithCommas(data[data.length-1].Confirmed)}</h2>`;
            document.querySelector("#cases").innerHTML=template1;
            template2=`<h2>${numberWithCommas(data[data.length-1].Deaths)}</h2>`;
            document.querySelector("#deaths").innerHTML=template2;
            template3=`<h2>${numberWithCommas(data[data.length-1].Recovered)}</h2>`;
            document.querySelector("#recover").innerHTML=template3;
            template4=`<h2>${numberWithCommas(data[data.length-1].Active)}</h2>`;
            document.querySelector("#active").innerHTML=template4;
        }
        console.log(data.Country)
     })
};
