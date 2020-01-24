import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapApiService {

  constructor(private geolocation: Geolocation) {
    // this.geolocation
    //   .getCurrentPosition()
    //   .then(resp => {
    //     console.log(this.lat = resp.coords.latitude, this.lng = resp.coords.longitude);
    //   })
    //   .catch(error => {
    //     console.log("Error getting location", error);
    //   });

    // let watch = this.geolocation.watchPosition();
    // watch.subscribe(data => {
    //   // data can be a set of coordinates, or an error (if an error occurred).
    //   data.coords.latitude;
    //   data.coords.longitude;
     
    // });
}
}
