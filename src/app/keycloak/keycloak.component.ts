import { Component, Input, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-keycloak',
  templateUrl: './keycloak.component.html',
  styleUrls: ['./keycloak.component.scss']
})
export class KeycloakComponent implements OnInit {
  @Input() isLogged: boolean = false;
  @Input() statusKeycloak: Boolean = false;
  @Input() dataUser: any = null;
  @Input() meToken: any = null;
  statusUser = false;
  public isCollapsed = false;

  constructor(private readonly keycloak: KeycloakService) {}

  ngOnInit(): void {
  }

  public initSession() {
    this.keycloak.login();
  }
  
  public finishSession() {
    this.keycloak.logout();
  }

  activeInfosUser(){
    this.statusUser = !this.statusUser
  }
}
