import React from 'react';

// const API_KEY = 'AIzaSyBC9zhQydf0KVocRrjAGCLsQfQ-A1PcG-w';
// var geolocation = require('geolocation');

export function getLocation() {
  return (window.onload = async () => {
    const getCoords = async () => {
      const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      return {
        long: pos.coords.longitude,
        lat: pos.coords.latitude,
      };
    };

    const coords = await getCoords();
    console.log(coords);
    let data = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${coords.lat}+${coords.long}&key=06494d00ff484eb2a15690fc4fa67e9a`
    ).then((res) => res.json());
    // console.log(data);
    return data;
  });
}
