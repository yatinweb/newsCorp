import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonListHeader, IonLabel, IonItem, IonThumbnail, IonRadioGroup, IonRadio, IonFooter, IonButtons, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonButtons, IonFooter, IonRadio, IonRadioGroup, IonItem, IonLabel, IonListHeader, IonList, IonHeader, IonToolbar, IonTitle, IonContent, IonThumbnail, NgForOf],
})
export class HomePage {
  leagueList = [
    {
      id: 1,
      name: 'EPL',
      gameType: 'football',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=1',
    },
    {
      id: 2,
      name: 'NBL',
      gameType: 'football',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=2',
    },
    {
      id: 3,
      name: 'BBL',
      gameType: 'football',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=3',
    },
  ];

  selectedLeague: any;

  constructor() {}

  handleChange(ev: any) {
    this.selectedLeague = ev.target.value;
    console.log(this.selectedLeague);
  }

}
