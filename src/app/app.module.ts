import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// AF2
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { GraphComponent } from './components/visuals/graph/graph/graph.component';
import { NodeVisualComponent } from './components/visuals/shared/node-visual/node-visual.component';
import { LinkVisualComponent } from './components/visuals/shared/link-visual/link-visual.component';
import { ZoomableDirective } from './directives/zoomable.directive';
import { DraggableDirective } from './directives/draggable.directive';
@NgModule({
  declarations: [AppComponent, GraphComponent, NodeVisualComponent, LinkVisualComponent, ZoomableDirective, DraggableDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
