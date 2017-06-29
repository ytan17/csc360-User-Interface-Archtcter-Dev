import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { NewssService } from './newss/shared/newss.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ProfilesComponent } from './profiles/profiles.component';
import { HomeComponent } from './home/home.component';
//import { NewsComponent } from './news/news.component';
import { GraphComponent } from './graph/graph.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { PopularItemComponent } from './popular-item/popular-item.component';
import { PopularListComponent } from './popular-list/popular-list.component';
import { RepoBrowserComponent } from './newss/repo-browser/repo-browser.component';
import { RepoListComponent } from './newss/repo-list/repo-list.component';
import { RepoDetailComponent } from './newss/repo-detail/repo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    //NewsComponent,
    GraphComponent,
    HomeComponent,
    ContactComponent,
    PopularItemComponent,
    PopularListComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    NewssService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
