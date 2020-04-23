import Total from './models/Total';
import Countries from './models/Countries';

import * as TotalView from './views/TotalView';
import * as CountriesView from './views/CountriesView';

import {DOMs} from './views/Base';
//preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader-finished');
    document.querySelector('body').classList.add('preload-show');
    setTimeout(() => {
        preloader.remove();
        document.querySelector('body').classList.remove('preload-show');
    },1000);

});
const state = {};

const controlTotal = async () => {
    state.total = new Total();
    try{
        //get Total
        await state.total.getTotal();

        //show totals
   
        TotalView.showCasesTotal(state.total.result.data.confirmed.value);
        TotalView.showRecoveredTotal(state.total.result.data.recovered.value);
        TotalView.showDeathsTotal(state.total.result.data.deaths.value);
        TotalView.showLastUpdate(state.total.result.data.lastUpdate);

    }
    catch(error){
        console.log(error);
    }
}
controlTotal();

const controlCountries = async () => {
    state.countries = new Countries("confirmed");
    try{
        await state.countries.getCountries();
        console.log(state.countries.result);
        CountriesView.showMyanmar(state.countries.result);
        CountriesView.showTableContent(state.countries.result);
    }
    catch(error){
        console.log(error);
    }
}
controlCountries();