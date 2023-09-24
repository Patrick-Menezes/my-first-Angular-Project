import { Component, Input, OnInit } from '@angular/core';
import { Package } from '../package.model';

@Component({
  selector: 'app-packages-details',
  templateUrl: './packages-details.component.html',
  styleUrls: ['./packages-details.component.css']
})
export class PackagesDetailsComponent implements OnInit {

@Input()packageSelected!:Package;

constructor(){}
ngOnInit(): void {
  
}

}
