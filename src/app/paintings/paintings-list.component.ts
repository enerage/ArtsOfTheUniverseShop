import { Component } from '@angular/core';


@Component({
    selector:'paintings-list',
    templateUrl:'paintings-list.component.html',
    styleUrls:['paintings-list.component.css']
})
export class PaintingsListComponent{
    paintings = [{
        title: 'My first painting',
        url: 'https://img.etsystatic.com/il/0ea1ac/1603466877/il_570xN.1603466877_kkxq.jpg?version=0',
        price: 10
    },
    {
        title: 'My first painting',
        url: 'https://img.etsystatic.com/il/0ea1ac/1603466877/il_570xN.1603466877_kkxq.jpg?version=0',
        price: 10
    }]
}