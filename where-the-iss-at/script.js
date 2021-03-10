$(document).ready(() => {

    async function getIss() {
        const response = await fetch(`https://api.wheretheiss.at/v1/satellites/25544`);
        const data = await response.json();
        const issData = {
            id: data.id,
            name: data.name.toUpperCase(),
            time: data.timestamp,
            latitude: data.latitude,
            longitude: data.longitude,
            velocity: data.velocity,
            altitude: data.altitude,
        }
        $('.id').html(issData.id);
        $('.name').html(issData.name);
        $('.latitude').html(issData.latitude);
        $('.longitude').html(issData.longitude);
        $('.time').html(issData.time);
        $('.altitude').html((issData.altitude * 0.62137).toFixed(2) + " miles");
        $('.velocity').html((issData.velocity * 0.62137).toFixed(2) + " mph");
        $('.card-footer').html(new Date());
    }
    getIss();
    setInterval(() => {
        getIss();
    }, 1000);


});
