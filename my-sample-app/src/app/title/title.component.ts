import { Component } from "@angular/core";

@Component(
    {
        selector: 'app-title',
        template: '<h5>Ramana Sadguru Rayane !</h5> <h6>Ram Nam Sathya Hai!</h6>',
        styles:[`h5{
            color:blue
        }`,
       `h6{
            color:dodgerblue
        }`]
    }
)
export class TitleComponent {

}