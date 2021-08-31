import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  citiesAndCountries:any;
  searchField:any;
  destinations:any;
  countries:any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
    ){

  }
  ngOnInit() {
    this.getCitiesAndCountries();
  }
  getCitiesAndCountries(){
    this.http.get('https://devapi.luckytrip.co.uk/api/2.0/top_five/destinations').subscribe(data => {
      this.citiesAndCountries = data;
      this.citiesAndCountries = this.citiesAndCountries.destinations
    })
  }
  searchCountry(){
    this.http.get(
      'https://devapi.luckytrip.co.uk/api/2.0/top_five/destinations?search_type=city_or_country&search_value=' +
      this.searchField).subscribe(data => {
        this.countries = data;
        if(this.countries.destinations.length<1){
          this.toastr.error('No Results Found', 'Error!');
          return;
        }
        this.citiesAndCountries = this.countries.destinations;
      })
  }
  openTrendingPage(country){
    this.router.navigate(['/Results',
    {
      id: country.id,
      city:country.city,
      country_name:country.country_name,
      image_url:country.image_url
    }])
  }
}
