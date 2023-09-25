import { Component,OnInit, } from '@angular/core';
import { Package } from '../package.model';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.css']
})
export class PackagesListComponent  implements OnInit{

packages?:Package[];




constructor( 
  private packageService: PackageService
){}

ngOnInit():void {
  this.packages= this.packageService.getPackages();
}




}
