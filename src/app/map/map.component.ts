import { Platform } from '@ionic/angular';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from "@angular/core";

declare var google;

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  constructor(private geolocation: Geolocation, private platform: Platform) {}
  
  title = "angular-gmap";
  @ViewChild("mapContainer", { static: true }) gmap: ElementRef;
  map;

  lat;
  lng;
  LatLng; 

  

  ngOnInit() {
    this.mapInitializer();
  }

  mapInitializer() {
  //  this.platform.ready().then(() => {
  //   let options  = {
  //     timeout: 3000,
  //     enableHighAccuracy: true
  //   }
  //  }); 
   
  //   }
    this.geolocation.getCurrentPosition().then(resp => {
      // this.lat  = resp.coords.latitude;
      // this.lng =  resp.coords.longitude;
      this.LatLng = new google.maps.LatLng(
        resp.coords.latitude,
        resp.coords.longitude
      );
      let mapOptions  = {
        center: this.LatLng,
        zoom: 15
      };
    
      let marker = new google.maps.Marker({
        position: this.LatLng,
        map: this.map
      });

      this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);
      this.map.setCenter(this.LatLng);
      marker.setMap(this.map);
    
    });
        
  }
}
