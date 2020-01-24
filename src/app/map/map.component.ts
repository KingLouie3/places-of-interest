import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var google;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit{
  
  constructor(private geolocation: Geolocation) {}
  title = 'angular-gmap';
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  

  LatLng = new google.maps.LatLng(this.lat, this.lng);
  
  mapOptions: google.maps.MapOptions = {
   center: this.LatLng,
   zoom: 8
   
  };

  marker = new google.maps.Marker({
    position: this.LatLng,
    map: this.map,
  });

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.geolocation.getCurrentPosition().then(resp => {
      let LatLng = new google.maps.LatLng(resp.coords.latitude,  resp.coords.longitude)
      this.map.setCenter(LatLng);
      this.marker.setMap(LatLng);
    });
    
    
  }
 }
