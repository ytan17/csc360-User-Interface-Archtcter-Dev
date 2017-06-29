import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewssService} from '../shared/newss.service';

@Component({
  selector: 'repo-detail',
  styleUrls: ['./repo-detail.component.css'],
  templateUrl: './repo-detail.component.html'
})
export class RepoDetailComponent implements OnInit {
  private org:string;
  private repo:string;
  public repoDetails:any = {};

  constructor(public newss:NewssService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.org = this.route.snapshot.parent.params['org'];
      this.repo = params['repo'] || '';

      if (this.repo) {
        this.newss.getRepoForOrg(this.org, this.repo)
          .subscribe(repoDetails => {
            this.repoDetails = repoDetails;
          });
      }
    });
  }
}
