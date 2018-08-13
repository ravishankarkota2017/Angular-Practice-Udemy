import { Component } from "@angular/core";

@Component(
    {
        selector:'app-details',
        templateUrl:'./details.component.html',
        styleUrls:['details.component.css']
    }
)
export class DetailsComponent{

    private showDetails:boolean = false;
    public logentries:string[] = [];
    public now: Date = new Date();
    public currentDateTime: Date;

    onDisplayDetailsClick():void{

     this.currentDateTime = new Date();

      if(this.showDetails){
        this.showDetails = false;

        this.logentries.push("Hidden at "+this.currentDateTime);
      }
      else {
        this.showDetails = true;
        this.logentries.push("Shown at "+this.currentDateTime);
      }

    }
}
