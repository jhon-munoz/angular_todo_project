import {Component, OnInit} from '@angular/core';
import {HarcodedAuthenticationService} from '../service/harcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedAuthenticationService
                : HarcodedAuthenticationService) {
  }

  ngOnInit() {
    this.hardcodedAuthenticationService.logout();
  }

}
