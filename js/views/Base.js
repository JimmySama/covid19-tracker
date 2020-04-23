export const DOMs = {
    body: document.querySelector('body'),
    preloader: document.querySelector('.preloader'),

    casesTotal : document.querySelector('.cases'),
    recoveredTotal : document.querySelector('.recovered'),
    deathsTotal : document.querySelector('.deaths'),
    lastUpdate : document.querySelector('.summary__text'),
    myanmarCases : document.querySelector('.myanmar-cases'),
    myanmarRecovered : document.querySelector('.myanmar-recovered'),
    myanmarDeaths : document.querySelector('.myanmar-deaths'),
    totalCaseTable : document.querySelector('.total-case'),
    dailyCaseTable : document.querySelector('.daily-case')
};

export const formatNumber = (number) => {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

