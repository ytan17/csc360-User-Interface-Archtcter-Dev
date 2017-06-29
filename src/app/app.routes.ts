import { Routes } from '@angular/router';

import { ProfilesComponent } from './profiles/profiles.component';
import { HomeComponent } from './home/home.component';
import { GraphComponent } from './graph/graph.component';
//import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { PopularItemComponent } from './popular-item/popular-item.component';
import { PopularListComponent } from './popular-list/popular-list.component';
import { RepoBrowserComponent } from './newss/repo-browser/repo-browser.component';
import { RepoListComponent } from './newss/repo-list/repo-list.component';
import { RepoDetailComponent } from './newss/repo-detail/repo-detail.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'graph', component: GraphComponent},
 // { path: 'news', component: NewsComponent},
  { path: 'app-popular-list', component: PopularListComponent},
  { path: 'newss', component: RepoBrowserComponent,
    children: [
      { path: '', component: RepoListComponent },
      { path: ':org', component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent },
          { path: ':repo', component: RepoDetailComponent }
        ]
      }]
  },
  { path: 'contact', component: ContactComponent }
];

