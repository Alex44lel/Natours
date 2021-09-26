/*eslint-disable*/

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYWxleDQ0bGVsIiwiYSI6ImNrdHN0dWdndzFrMHEzMG1weWJlOThteDQifQ.OAlSoMfn_oJ6JBKvrZzKJg';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/alex44lel/cktsu13oo10hx18n5gtxike2y',
    center: [-118.11, 34.11],
    zoom: 8,
    scrollZoom: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    //create marker
    let el = document.createElement('div');
    el.className = 'marker';
    //add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    //add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day} ${loc.description}</p>`)
      .addTo(map);
    //extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
