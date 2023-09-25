import { Package } from "./package.model";
import {EventEmitter} from "@angular/core";

export class PackageService {


packageSelected = new EventEmitter<Package>();

    packages: Package[] = [
        new Package('Churrasco', 'Churrasco de Picanha', 'https://th.bing.com/th/id/OIP.vAyXtbX1rGHQ6aP8PWoWTgHaFM?w=287&h=201&c=7&r=0&o=5&pid=1.7'),
        new Package('strogonofe', 'estrogonofe com arroz', 'https://th.bing.com/th/id/R.3e2a335fa2dda637fe7d46a544d8bc37?rik=Xxn2C%2bowPDF5EA&pid=ImgRaw&r=0')

    ];

getPackages(){

    return this.packages.slice();
}





}