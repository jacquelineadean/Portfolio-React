import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './style.css'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Locator = () => {
    const mapContainerRef = useRef(null);
  
    // initialize map when component mounts
    useEffect(() => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        // See style options here: https://docs.mapbox.com/api/maps/#styles
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-97.733330, 30.266666],
        zoom: 12.5,
      });
  
      // add navigation control (the +/- zoom buttons)
      map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
  
      // clean up on unmount
      return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
    return <div className="map-container" ref={mapContainerRef} />;
};
  

export default Locator;

