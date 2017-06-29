import {Component, OnInit} from '@angular/core';
import {NewssService} from '../shared/newss.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'repo-list',
  styleUrls: ['./repo-list.component.css'],
  templateUrl: './repo-list.component.html',
})
export class RepoListComponent implements OnInit {
  org: string;
  repos: Observable<any>;

  constructor(public newss: NewssService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.org = params['org'];
      if (this.org) {
        this.repos = this.newss.getReposForOrg(this.org);
      }
    });
  }
}
