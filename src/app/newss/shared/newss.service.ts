import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewssService {
  constructor(private http: Http) {}

  getOrg(org: string) {
    return this.makeRequest(`orgs/${org}`);
  }

  getReposForOrg(org: string) {
    return this.makeRequest(`orgs/${org}/repos`);
  }

  getRepoForOrg(org: string, repo: string) {
    return this.makeRequest(`repos/${org}/${repo}`);
  }

  private makeRequest(path: string) {
    let params = new URLSearchParams();
    params.set('api-key', 'd70aef6988d34c2b916a07bf4172fffd');

    let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json`;
    return this.http.get(url, {search: params})
      .map((res) => res.json());
  }
}
