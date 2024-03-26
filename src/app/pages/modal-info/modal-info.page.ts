import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  //modalCtrl:any;
  @Input() nombre:string|undefined;
  @Input( )pais:string|undefined;
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  salirsinArgumentos(){
    this.modalCtrl.dismiss();
  }

  salirconArgumentos(){
    this.modalCtrl.dismiss(
      {
      nombre:"Gael",
      pais:"Mexico"}
    );
  }
  
  async mostralModal(){
  
  }



}
