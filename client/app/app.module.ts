import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }         from './app.component';
import { ConversationComponent} from './conv/conversation.component';
import { ConversationService }  from './conv/conversation.service';

const routes: Routes = [
  { path: '', component: ConversationComponent },
  { path: 'conversation/:type', component: ConversationComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [
    AppComponent,
    ConversationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ConversationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
