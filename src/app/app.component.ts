import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  date = new Date().getFullYear();
  statusKeycloak = false;
  isLogged = false;
  dataUser: KeycloakProfile | null = null;
  meToken: any = null;

  constructor(private readonly keycloak: KeycloakService) {}

  public async ngOnInit(){
    this.isLogged = await this.keycloak.isLoggedIn();

    if (this.isLogged) {
      this.dataUser = await this.keycloak.loadUserProfile();
      this.meToken = await this.keycloak.getToken()
    }
  }

  activeKeycloak(){
    this.statusKeycloak = !this.statusKeycloak;
  }
}
