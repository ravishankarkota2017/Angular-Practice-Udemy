import { Component } from "@angular/core";


@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:['server.component.css']
})
export class ServerComponent{
   ipAddress:string = '118.120.110.234';
   machineSerialNo:number = 100;
   machineStatus:string = 'Offline';

   constructor(){
       this.machineStatus = Math.random() > 0.5 ? 'Offline' : 'Online'
   }

   getMachineStatus(): string {
        return this.machineStatus;
   }
   getColor(){
       return this.machineStatus === 'Online' ? 'green' : 'darkred';
   }

}
