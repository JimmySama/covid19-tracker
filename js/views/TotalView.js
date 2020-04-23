import {DOMs, formatNumber} from './Base';

export const showCasesTotal = (data) => {
    
    DOMs.casesTotal.textContent = formatNumber(data);
}   
export const showRecoveredTotal = (data) => {
    DOMs.recoveredTotal.textContent = formatNumber(data);
}   
export const showDeathsTotal = (data) => {
    
    DOMs.deathsTotal.textContent = formatNumber(data);
}   
export const showLastUpdate = (data) => {
    
    DOMs.lastUpdate.textContent = "last update: " + data.split('T')[0];
}