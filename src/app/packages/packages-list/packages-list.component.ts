import { Component } from '@angular/core';
import { Package } from './package.model';

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.css']
})
export class PackagesListComponent {

packages:Package[]=[
new Package('Churrasco','Churrasco de Picanha','https://th.bing.com/th/id/OIP.vAyXtbX1rGHQ6aP8PWoWTgHaFM?w=287&h=201&c=7&r=0&o=5&pid=1.7'),
new Package('Churrasco','Churrasco de Picanha','https://th.bing.com/th/id/OIP.vAyXtbX1rGHQ6aP8PWoWTgHaFM?w=287&h=201&c=7&r=0&o=5&pid=1.7')


];











}
