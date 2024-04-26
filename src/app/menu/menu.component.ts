import {Component, OnInit} from '@angular/core';
import {HarcodedAuthenticationService} from '../service/harcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // isUsserLogged = false;

  constructor(private hardcodedAuthenticationService
                : HarcodedAuthenticationService) {
  }

  ngOnInit() {
    // this.isUsserLogged = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
