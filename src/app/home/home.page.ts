import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { 
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent, 
  IonList, 
  IonListHeader, 
  IonLabel,
  IonItem, 
  IonThumbnail, 
  IonRadioGroup, 
  IonRadio, 
  IonFooter, 
  IonButtons, 
  IonButton, 
  IonGrid, 
  IonCol,
  IonRow,
  IonCheckbox,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
 } from '@ionic/angular/standalone';

export interface ILeagueList {
  id: number;
  name: string;
  gameType: string;
  logoUrl: string;
}

export interface ITeamList {
  id: number;
  name: string;
  logoUrl: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent, 
    IonList, 
    IonListHeader, 
    IonLabel,
    IonItem, 
    IonThumbnail, 
    IonRadioGroup, 
    IonRadio, 
    IonFooter, 
    IonButtons, 
    IonButton, 
    IonGrid, 
    IonCol,
    IonRow,
    IonCheckbox,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    NgForOf
  ],
})
export class HomePage {
  leagueList: ILeagueList[] = [
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

  teamList: ITeamList[] = [
    {
      id: 1,
      name: 'Manchester United',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=1',
    },
    {
      id: 2,
      name: 'Arsenal',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=2',
    },
    {
      id: 3,
      name: 'Liverpool',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=3',
    },
    {
      id: 5,
      name: 'Chelsea',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=3',
    },
    {
      id: 5,
      name: 'Westham United',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=3',
    },
  ];

  selectedLeague: ILeagueList | undefined;
  selectedTeamList: ITeamList[] = [];

  constructor() { }

  handleLeagueChange(ev: any): void {
    this.selectedLeague = ev.target.value as ILeagueList;
  }


  onTeamChange(team: ITeamList): void {
    if (this.selectedTeamList.includes(team)) {
      this.selectedTeamList = this.selectedTeamList.filter((value) => value != team);
    } else {
      this.selectedTeamList.push(team);
    }
  }

  serach(): void {
    console.log(this.selectedLeague);
    console.log(this.selectedTeamList);
  }

}
