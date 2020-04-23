import { DOMs,formatNumber } from "./Base";

export const showMyanmar = (data) =>{
    const dataMyanmer = data.find((curr) => curr.countryRegion === 'Burma');
    DOMs.myanmarCases.textContent = dataMyanmer.confirmed;
    DOMs.myanmarRecovered.textContent = dataMyanmer.recovered; 
    DOMs.myanmarDeaths.textContent = dataMyanmer.deaths; 
}
export const showTableContent = (data) => {


    let sortedArr = [];
    // let largeState = {
    //     US : [],
    //     China : [],
    //     UK : [],
    //     France : [],
    //     Australia : [],
    //     Denmark : [],
    //     Canada : [],
    //     Netherlands : []
    // };
    let US = [];
    let China = [];
    let UK = [];
    let France = [];
    let Australia = [];
    let Denmark = [];
    let Canada = [];
    let Netherlands = [];
   
    let largeStateArr = [];
    let sumArr = [];

    // let sumLargeState = {
    //     confirmed : {
     
    //         US : 0,
    //         China : 0,
    //         UK : 0,
    //         France : 0,
    //         Australia : 0,
    //         Denmark : 0,
    //         Canada : 0,
    //         Netherlands : 0
    //     },
    //     active : {
        
    //         US : 0,
    //         China : 0,
    //         UK : 0,
    //         France : 0,
    //         Australia : 0,
    //         Denmark : 0,
    //         Canada : 0,
    //         Netherlands : 0
    //     },
    //     recovered : {
     
    //         US : 0,
    //         China : 0,
    //         UK : 0,
    //         France : 0,
    //         Australia : 0,
    //         Denmark : 0,
    //         Canada : 0,
    //         Netherlands : 0
    //     },
    //     deaths :{
   
    //         US : 0,
    //         China : 0,
    //         UK : 0,
    //         France : 0,
    //         Australia : 0,
    //         Denmark : 0,
    //         Canada : 0,
    //         Netherlands : 0
    //     }
    // };
    // let regions = [];
    // let countries = [];
    // let states = [];
    // data.forEach(element => {
    //     regions.push(element.countryRegion);
    //     if(element.provinceState === null){
    //         countries.push(element.countryRegion);
    //     }
    //     if(element.provinceState !== null){
    //         states.push(element.countryRegion);
    //     }

    // });
    // console.log(regions);
    // console.log(countries);
    // console.log(states);
    // const unique = (value,index,self) =>{
    //     return self.indexOf(value) === index;
    // }
    // const disunique = (value,index,self) =>{
    //     return self.indexOf(value) !== index;
    // }
    // const uniqueRegion = regions.filter(unique);
    // const uniqueCountries = countries.filter(unique);
    // const uniquestates = states.filter(unique);
    // const disuiquestates = regions.filter(disunique);
    // console.log(disuiquestates.filter(unique));
    
    // console.log(uniqueRegion);
    // console.log(uniqueCountries);
    // console.log(uniquestates);

    // data.forEach(curr => {
    //     if(curr.countryRegion === "US"){
    //         largeState.US.push(curr);
    //     }
    //     if(curr.countryRegion === 'China'){
    //         largeState.China.push(curr);
    //     }
    //     if(curr.countryRegion === 'Canada'){
    //         largeState.Canada.push(curr);
    //     }
    //     if(curr.countryRegion === 'Australia'){
    //         largeState.Australia.push(curr);
    //     }
    //     if(curr.countryRegion === "United Kingdom"){
    //         largeState.UK.push(curr);
    //     }
    //     if(curr.countryRegion === 'France'){
    //         largeState.France.push(curr);
    //     }
    //     if(curr.countryRegion === 'Denmark'){
    //         largeState.Denmark.push(curr);
    //     }
    //     if(curr.countryRegion === 'Netherlands'){
    //         largeState.Netherlands.push(curr);
    //     }
    // });
    data.forEach(curr => {
        if(curr.countryRegion === "US"){
            US.push(curr);
        }
        if(curr.countryRegion === 'China'){
            China.push(curr);
        }
        if(curr.countryRegion === 'Canada'){
            Canada.push(curr);
        }
        if(curr.countryRegion === 'Australia'){
            Australia.push(curr);
        }
        if(curr.countryRegion === "United Kingdom"){
            UK.push(curr);
        }
        if(curr.countryRegion === 'France'){
            France.push(curr);
        }
        if(curr.countryRegion === 'Denmark'){
            Denmark.push(curr);
        }
        if(curr.countryRegion === 'Netherlands'){
            Netherlands.push(curr);
        }
    });
    // console.log(largeState);

    // largeStateArr = [...US,...UK,...Canada,...China,...Denmark,...France,...Netherlands,...Australia];
    // console.log(largeStateArr);
    // largeStateArr.forEach(cur => {

    // })
    const getTotal = (stateArr,state) =>  {

        // if(state === "United Kingdom"){
        //     state = "UK";
        // }
        let confirmed = 0;
        let active = 0;
        let recovered = 0;
        let deaths = 0;
        stateArr.forEach(curr => {
            // sumLargeState.confirmed[state] += curr.confirmed;
            // sumLargeState.active[state] += curr.active;
            // sumLargeState.recovered[state] += curr.recovered;
            // sumLargeState.deaths[state] += curr.deaths;
            // sumLargeState.deaths[state] = state;
            confirmed += curr.confirmed;
            active += curr.active;
            recovered += curr.recovered;
            deaths += curr.deaths;
           
        });
        sumArr.push([state,confirmed,active,recovered,deaths]);
    };
   
    
    getTotal(US,"US");
    getTotal(UK,"United Kingdom");
    getTotal(Australia,"Australia");
    getTotal(Canada,"Canada");
    getTotal(France,"France");
    getTotal(Denmark,"Denmark");
    getTotal(Netherlands,"Netherlands");
    getTotal(China,"China");
    
    // console.log(sumArr);
    data.forEach(curr => {
       const selectedCountries = ["US","China","United Kingdom","Australia","Canada","France","Denmark","Netherlands"];
       if(selectedCountries.indexOf(curr.countryRegion) === -1){
        sumArr.push([curr.countryRegion,curr.confirmed,curr.active,curr.recovered,curr.deaths]);
        //     sumLargeState.deaths[curr.countryRegion] = curr.deaths;
        //    sumLargeState.confirmed[curr.countryRegion] = curr.confirmed;
        //    sumLargeState.active[curr.countryRegion] = curr.active;
        //    sumLargeState.recovered[curr.countryRegion] = curr.recovered;
        //    sumLargeState.deaths[curr.countryRegion] = curr.deaths;
        
       }
    });
    // console.log(sumArr);
    const renderCountry = (country,index) => {
        let markUp;
        if(index % 2 === 1){
            markUp = `
            <tr>
                            <td>${index + 1}</td>
                            <td>${country[0]}</td>
                            <td>${country[1]}</td>
                            <td>${country[2]}</td>
                            <td>${country[3]}</td>
                           
                        </tr>
                   
            `;
        }else{
            markUp = `
            <tr class="table-back-light">
                            <td>${index + 1}</td>
                            <td>${country[0]}</td>
                            <td>${country[1]}</td>
                            <td>${country[2]}</td>
                            <td>${country[3]}</td>
                           
                        </tr>
                   
            `;
        }

     

        DOMs.totalCaseTable.insertAdjacentHTML('beforeend',markUp);
        DOMs.dailyCaseTable.insertAdjacentHTML('beforeend',markUp);
    }
    // console.log(sumArr.slice(0,11));
    sumArr.slice(0,11).forEach((curr,index) => {
        renderCountry(curr,index);
    });

    // })
    // let size = Object.keys(sumLargeState.active).length;
    
    // sortedArr.sort((a,b) => {
    //     if(a > b){
    //         return -1;
    //     }
    //     if(a < b){
    //         return 1;
    //     }
    // });
    // console.log(sortedArr);
    // let ok = data.find(el => el.confirmed === hightestArr[0]);
    // console.log(ok);
    // const sortedData = hightestArr.map(curr => {
    //     data.find(el => el.confirmed === curr);
    // });
    // console.log(sortedData);
   
}