import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit, OnInit {
  constructor(private geolocation: Geolocation) {}
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat;
  lng;
  google;

  coordinates;

  mapOptions: google.maps.MapOptions = {
   center: this.coordinates,
   zoom: 8
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  
  ngOnInit() {
    this.geolocation.getCurrentPosition()
      .then(resp => {
        console.log("Lat&Lng",this.lat = resp.coords.latitude, this.lng = resp.coords.longitude);
        console.log("coords", this.coordinates = new google.maps.LatLng(this.lat, this.lng));
      })
      .catch(error => {
        console.log("Error getting location", error);
      });

    let watch = this.geolocation.watchPosition();
    watch.subscribe(data => {
      // data can be a set of coordinates, or an error (if an error occurred).
      data.coords.latitude;
      data.coords.longitude;
     
    });
  }
  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
    this.marker.setMap(this.map);
  }
 }
