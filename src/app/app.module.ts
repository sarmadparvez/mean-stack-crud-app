import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { FirstComponent } from './first/first.component';

import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { GOTCharacterComponent } from './gotcharacter/gotcharacter.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { AppBoldDirective } from './app-bold.directive';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import {Routes, RouterModule} from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ListComponent } from './list/list.component';

const ROUTES: Routes = [
{path:'' , component: HomeComponent},
{path:'blog' , component: BlogComponent},
{path:'about' , component: AboutComponent},
{path: 'template-driven', component: TemplateDrivenComponent },
{path : 'reactive-forms', component : ReactiveFormsComponent},
{path: 'directives', component: DirectiveExampleComponent},
{path: 'first', component: FirstComponent},
{path: 'list', component: ListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    GOTCharacterComponent,
    DirectiveExampleComponent,
    AppBoldDirective,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, { relativeLinkResolution: 'legacy' }),
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
