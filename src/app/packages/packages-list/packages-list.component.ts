import { Component,Output,OnInit,EventEmitter } from '@angular/core';
import { Package } from '../package.model';

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.css']
})
export class PackagesListComponent  implements OnInit{

packages:Package[]=[
new Package('Churrasco','Churrasco de Picanha','https://th.bing.com/th/id/OIP.vAyXtbX1rGHQ6aP8PWoWTgHaFM?w=287&h=201&c=7&r=0&o=5&pid=1.7'),
new Package('strogonofe','estrogonofe com arroz','https://th.bing.com/th/id/R.3e2a335fa2dda637fe7d46a544d8bc37?rik=Xxn2C%2bowPDF5EA&pid=ImgRaw&r=0')


];
@Output() packageWasSelected = new EventEmitter<Package>();


constructor(){}

ngOnInit():void {}

onPackageSelected(packageSelected:Package){
this.packageWasSelected.emit(packageSelected);

}


}
