import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'header-component',
    templateUrl: 'header.component.html'
  })
export class headercomponent{


@Output() featureSelected = new EventEmitter<string>();

onSelectet(feature:string){
  this.featureSelected.emit(feature);
}


}