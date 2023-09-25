import { Component ,OnInit,OnDestroy} from '@angular/core';
import{Subscription} from 'rxjs'
import { Package } from './package.model';
import { PackageService } from './package.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
  providers:[PackageService],
})
export class PackagesComponent implements OnInit, OnDestroy{

selectedPackage!: Package;
subscription :Subscription = new Subscription();
constructor(
  private packageService:PackageService
){}

ngOnInit(): void {
  
this.subscription= this.packageService.packageSelected.subscribe((selectedPackage:Package)=>
{
  this.selectedPackage= selectedPackage;
})

}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}

}
