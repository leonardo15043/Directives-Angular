import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { ClasesComponent } from './components/clases/clases.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { NgSwiftComponent } from './components/ng-swift/ng-swift.component';


@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    ClasesComponent,
    ResaltadoDirective,
    NgSwiftComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
