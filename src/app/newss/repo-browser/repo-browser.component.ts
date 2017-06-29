import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewssService } from '../shared/newss.service';

@Component({
  selector: 'repo-browser',
  templateUrl: './repo-browser.component.html',
  styleUrls: ['./repo-browser.component.css']
})
export class RepoBrowserComponent {

  constructor(private router: Router, private newss: NewssService) {
  }

  searchForOrg(orgName: string) {
    this.newss.getOrg(orgName)
      .subscribe(({orgName}) => {
        this.router.navigate(['/newss', orgName]);
      });
  }

}
