function abbrState(input, to){
    
    var states = [
        ['Arizona', 'AZ'],
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];

    if (to == 'abbr'){
        input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        for(i = 0; i < states.length; i++){
            if(states[i][0] == input){
                return(states[i][1]);
            }
        }    
    } else if (to == 'name'){
        input = input.toUpperCase();
        for(i = 0; i < states.length; i++){
            if(states[i][1] == input){
                return(states[i][0]);
            }
        }    
    }
}
function stateToPop(input){
    var stateP = [
        {
          "State": "Alabama",
          "Population": 4903185
        },
        {
          "State": "Alaska",
          "Population": 731545
        },
        {
          "State": "Arizona",
          "Population": 7278717
        },
        {
          "State": "Arkansas",
          "Population": 3017804
        },
        {
          "State": "California",
          "Population": 39512223
        },
        {
          "State": "Colorado",
          "Population": 5758736
        },
        {
          "State": "Connecticut",
          "Population": 3565287
        },
        {
          "State": "Delaware",
          "Population": 973764
        },
        {
          "State": "District of Columbia",
          "Population": 705749
        },
        {
          "State": "Florida",
          "Population": 21477737
        },
        {
          "State": "Georgia",
          "Population": 10617423
        },
        {
          "State": "Hawaii",
          "Population": 1415872
        },
        {
          "State": "Idaho",
          "Population": 1787065
        },
        {
          "State": "Illinois",
          "Population": 12671821
        },
        {
          "State": "Indiana",
          "Population": 6732219
        },
        {
          "State": "Iowa",
          "Population": 3155070
        },
        {
          "State": "Kansas",
          "Population": 2913314
        },
        {
          "State": "Kentucky",
          "Population": 4467673
        },
        {
          "State": "Louisiana",
          "Population": 4648794
        },
        {
          "State": "Maine",
          "Population": 1344212
        },
        {
          "State": "Maryland",
          "Population": 6045680
        },
        {
          "State": "Massachusetts",
          "Population": 6892503
        },
        {
          "State": "Michigan",
          "Population": 9986857
        },
        {
          "State": "Minnesota",
          "Population": 5639632
        },
        {
          "State": "Mississippi",
          "Population": 2976149
        },
        {
          "State": "Missouri",
          "Population": 6137428
        },
        {
          "State": "Montana",
          "Population": 1068778
        },
        {
          "State": "Nebraska",
          "Population": 1934408
        },
        {
          "State": "Nevada",
          "Population": 3080156
        },
        {
          "State": "New Hampshire",
          "Population": 1359711
        },
        {
          "State": "New Jersey",
          "Population": 8882190
        },
        {
          "State": "New Mexico",
          "Population": 2096829
        },
        {
          "State": "New York",
          "Population": 19453561
        },
        {
          "State": "North Carolina",
          "Population": 10488084
        },
        {
          "State": "North Dakota",
          "Population": 762062
        },
        {
          "State": "Ohio",
          "Population": 11689100
        },
        {
          "State": "Oklahoma",
          "Population": 3956971
        },
        {
          "State": "Oregon",
          "Population": 4217737
        },
        {
          "State": "Pennsylvania",
          "Population": 12801989
        },
        {
          "State": "Rhode Island",
          "Population": 1059361
        },
        {
          "State": "South Carolina",
          "Population": 5148714
        },
        {
          "State": "South Dakota",
          "Population": 884659
        },
        {
          "State": "Tennessee",
          "Population": 6829174
        },
        {
          "State": "Texas",
          "Population": 28995881
        },
        {
          "State": "Utah",
          "Population": 3205958
        },
        {
          "State": "Vermont",
          "Population": 623989
        },
        {
          "State": "Virginia",
          "Population": 8535519
        },
        {
          "State": "Washington",
          "Population": 7614893
        },
        {
          "State": "West Virginia",
          "Population": 1792147
        },
        {
          "State": "Wisconsin",
          "Population": 5822434
        },
        {
          "State": "Wyoming",
          "Population": 578759
        }
      ];
    for(i = 0; i < stateP.length; i++){
        if(stateP[i].State == input){
            return(stateP[i].Population);
        }
    }
}
