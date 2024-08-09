import { NgForOf, NgIf } from '@angular/common';
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
  IonModal,
  IonCardSubtitle,
  IonBadge,
  IonItemDivider,
  IonItemGroup,
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

export interface IPlayerList {
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
    NgForOf,
    NgIf,
    IonModal,
    IonCardSubtitle,
    IonBadge,
    IonItemDivider,
    IonItemGroup,
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
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=4',
    },
    {
      id: 2,
      name: 'Arsenal',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=5',
    },
    {
      id: 3,
      name: 'Liverpool',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=6',
    },
    {
      id: 4,
      name: 'Chelsea',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=7',
    },
    {
      id: 5,
      name: 'Westham United',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=8',
    },
  ];

  playerList: IPlayerList[] = [
    {
      id: 1,
      name: 'Marcus Rashford',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=11',
    },
    {
      id: 2,
      name: 'Anthony',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=12',
    },
    {
      id: 3,
      name: 'Amed',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=13',
    },
    {
      id: 4,
      name: 'Diogo',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=14',
    },
    {
      id: 5,
      name: 'Leny',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=15',
    },
    {
      id: 6,
      name: 'William',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=16',
    },
    {
      id: 7,
      name: 'Thomas',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=17',
    },
    {
      id: 8,
      name: 'Saka',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=18',
    },
    {
      id: 9,
      name: 'Martin',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=19',
    },
    {
      id: 10,
      name: 'Fabio',
      logoUrl: 'https://picsum.photos/100/100/?blur=2&random=110',
    },
  ];

  selectedLeague: ILeagueList | undefined;
  selectedTeamList: ITeamList[] = [];
  selectedPlayerList: IPlayerList[] = [];
  isModalOpen = false;

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

  onPlayerChange(player: IPlayerList): void {
    if (this.selectedPlayerList.includes(player)) {
      this.selectedPlayerList = this.selectedPlayerList.filter((value) => value != player);
    } else {
      this.selectedPlayerList.push(player);
    }
  }

  serach(): void {
    console.log(this.selectedLeague);
    console.log(this.selectedTeamList);
    console.log(this.selectedPlayerList);
    this.setResultOpen(true);
  }

  setResultOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
