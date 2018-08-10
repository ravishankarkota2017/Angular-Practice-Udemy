import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  private allowNewMachine:boolean = false;
  private newMachineStatus:string = "No machine added newly.";
  private machineName:string = '';
  constructor() {
    setTimeout(() => {
      this.allowNewMachine = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onAddMachine():void{
    this.newMachineStatus = "A new machine has beeen added with name - "+this.machineName;
  }

  onServerNameEnter(event:Event):void{
    console.log(event);
    this.machineName = (<HTMLInputElement>event.target).value;
}
}
