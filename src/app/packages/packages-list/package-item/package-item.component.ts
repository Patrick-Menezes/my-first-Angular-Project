import { Component, Input, OnInit } from '@angular/core';
import { Package } from '../../package.model';
import { PackageService } from '../../package.service';

@Component({
  selector: 'app-package-item',
  templateUrl: './package-item.component.html',
  styleUrls: ['./package-item.component.css']
})
export class PackageItemComponent  implements OnInit{


@Input() package !:Package;


constructor( private packageService: PackageService){

}

ngOnInit(): void {
  
}


onSelected(){

this.packageService.packageSelected.emit(this.package);

}

}
