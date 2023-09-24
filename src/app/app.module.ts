import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { headercomponent } from './Header/header.component';
import { PackagesComponent } from './packages/packages.component';
import { PackagesDetailsComponent } from './packages/packages-details/packages-details.component';
import { PackagesListComponent } from './packages/packages-list/packages-list.component';
import { PackageItemComponent } from './packages/packages-list/package-item/package-item.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodEditComponent } from './food-list/food-edit/food-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    headercomponent,
    PackagesComponent,
    PackagesDetailsComponent,
    PackagesListComponent,
    PackageItemComponent,
    FoodListComponent,
    FoodEditComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
