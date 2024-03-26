import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes:any[]=[];
  textoBuscar:string='';
  

  constructor(private dataService:DataService) { }


  ngOnInit() {
    console.log("Inicio pagina search....");
    this.dataService.getAlbumes().subscribe(albumes=>{
      this.albumes=albumes;
    });

  }

  onSearchChange(event:any){
    //console.log("Boton search:...",event);
    this.textoBuscar=event.detail.value;

  }

}
