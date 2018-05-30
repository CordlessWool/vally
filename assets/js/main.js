// put your js here :-)


//on change, change in css too (size in px)
const viewports = {
    small: 576,
    medium: 768,
    large: 992
};

$(window).scroll(function () {
    

    if(!$('.navbar.no-teaser').length) {
	    if ($(window).scrollTop() >= 10) {
		    $('.navbar').addClass('white navbar-light');
		    $('.navbar').removeClass('navbar-dark');
	    } else {
		    $('.navbar').removeClass('white navbar-light');
		    $('.navbar').addClass('navbar-dark');
	    }
    }
});



function createMap(){
    
    mapboxgl.accessToken = 'pk.eyJ1IjoiY29yZGxlc3N3b29sIiwiYSI6ImNpd2NjZDdueDAwMjEydGs0Zm9jNzBjYjcifQ.m__H-6Oa_uM4LA9QjHh03w';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v9',
//        center: [13.133244, 52.39315],
       zoom: 14,
        // causes pan & zoom handlers not to be applied, similar to
        // .dragging.disable() and other handler .disable() funtions in Leaflet.
        interactive: false
    });

    return map;
};

function setMarker(map, lng, lat){
    var marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(map);
}

function flyTo(map, lng, lat, zoom){
    map.flyTo({
        center: [lng, lat],
        //zoom: zoom
    })
}

function mapResize(map, lng, lat, zoom){
   
    if ($(window).innerWidth() < viewports.medium) {
        flyTo(map, lng, lat-0.0035, zoom);
    }else{
        flyTo(map, lng+0.007, lat, zoom);
    }
}


(function init(){
    //if id map exist
    if($("#map").length > 0) {
        
        const mapTag = $("#map");
        
        var lng = Number(mapTag.attr("data-lng"));
        var lat = Number(mapTag.attr("data-lat"));
        var zoom = Number(mapTag.attr("data-zoom"));
        
        var Map = createMap();
        
        setMarker(Map, lng, lat);
        mapResize(Map, lng, lat, zoom);
        $(window).on('resize', function () {
            mapResize(Map, lng, lat, zoom);
        });
    }
    
})();


