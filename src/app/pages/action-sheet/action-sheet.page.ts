import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  public actionSheetButtons = [
    {
      text: 'Borrar',
      role: 'destructive',
      icon:'trash-outline',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Compartir',
      data: {
        action: 'share',
      },
      icon:'share-outline',
    },
    {
      text: 'Cancelar',
      icon:'close-outline',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
}
