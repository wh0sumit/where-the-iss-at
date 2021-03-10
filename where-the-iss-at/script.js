$(document).ready(() => {

    async function getIss() {
        const response = await fetch(`https://api.wheretheiss.at/v1/satellites/25544`);
        const data = await response.json();
        const {
            longitude,
            latitude,
            timestamp,
            altitude,
            velocity
        } = data;
        $('.latitude').html(latitude);
        $('.longitude').html(longitude);
        $('.time').html(timestamp);
        $('.altitude').html(altitude);
        $('.velocity').html(velocity);
        $('.card-footer').html(new Date());
    }
    getIss();
    setInterval(() => {
        getIss();
    }, 1000);


});