import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes:Observable<any>|undefined;
  
  publisher:string='todos';


  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.superHeroes=this.dataService.getHeroes();
  }

  segmentChanged(event:any){
    console.log("enevo: ", event);
    this.publisher=event.detail.value;
  }
}
