// Ovo bi trebao da bude modul, tj. bilo koji fajl koji u sebi ima neke funkcije kako bismo rasteretili app.js

exports.getDate = function() {

    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);
}

exports.getDay = function() {

    const today = new Date();

    const options = {
        weekday: "long"
    };

    return today.toLocaleDateString("en-US", options);

}