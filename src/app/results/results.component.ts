import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params ,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  id:any;
  searchField:any;
  image_url:any;
  city:any;
  country_name:any;
  text:any;
  country:any
  destinations:any;
  activities:any;


  constructor(
    private http: HttpClient,
    private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.getId();
    this.getImageUrl();
    this.getCity();
    this.getCountryName();
    this.getActivities();
  }
  getId(){
    this.id = this.route.snapshot.paramMap.get('id');
  }
  getImageUrl(){
    this.image_url = this.route.snapshot.paramMap.get('image_url');
  }
  getCity(){
    this.city = this.route.snapshot.paramMap.get('city');
  }
  getCountryName(){
    this.country_name = this.route.snapshot.paramMap.get('country_name');
  }
  getActivities(){
    this.http.get('https://devapi.luckytrip.co.uk/api/2.0/top_five/destination?id=' + this.id).subscribe(data => {
      this.country = data;
      this.destinations = this.country.destinations;
      this.activities = this.country.activities
    })
  }
}

