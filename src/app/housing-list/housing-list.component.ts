import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  //sharing data between components
  //create an array and take data from another component(app.component.ts) to put into the array
  @Input() locationList: HousingLocation[] = [];//sharing data from the parent to the child 
  results:HousingLocation[] =[];
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();

  constructor() { }

  ngOnInit(): void {
  }

  searchHousingLocations(searchText: string) {
    //console.log(searchText);
    if (!searchText) return; //if search input is empty do nothing

    //filter location city based on what has been typed in the search input
    this.results = this.locationList.filter(
      location => location.city.toLowerCase().includes(searchText.toLowerCase())
      )
  }

  selectHousingLocation(location: HousingLocation){
    this.selectedLocationEvent.emit(location);
  }

}
