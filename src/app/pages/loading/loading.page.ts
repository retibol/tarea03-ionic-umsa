import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading:any;

  constructor(private loadingCrtl:LoadingController) { }

  ngOnInit() {
  }

  mostrarLoading(){
    this.presentLoading();

    setTimeout(()=>{
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading(){
    const loading = await this.loadingCrtl.create({
      message:'Cargando...',
    }) ;
    await this.loading.present();
  }

}
