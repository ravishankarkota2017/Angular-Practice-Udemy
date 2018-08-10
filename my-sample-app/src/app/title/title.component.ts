import { Component } from "@angular/core";

@Component(
    {
        selector: '[app-title]',
        template: '<h3> Zenmonics Devices</h3> <i>information about  machines</i>',
        styles:[`h3{
            color:blue;
            font-weight:bold;
            width:280px;    
        }`,
       `i{
            color:dodgerblue
        }`]
    }
)
export class TitleComponent {

}