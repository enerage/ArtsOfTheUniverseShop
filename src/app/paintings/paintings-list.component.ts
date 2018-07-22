import { Component } from '@angular/core';


@Component({
    selector:'paintings-list',
    templateUrl:'paintings-list.component.html',
    styleUrls:['paintings-list.component.css']
})
export class PaintingsListComponent{
    paintings = [
    {
        title: 'My first painting',
        url: 'https://i.etsystatic.com/17192896/r/il/ce8766/1601272707/il_570xN.1601272707_a47j.jpg',
        price: 10
    },{
        title: 'My first painting',
        url: 'https://i.etsystatic.com/17192896/r/il/71798d/1601264695/il_570xN.1601264695_pyhn.jpg',
        price: 10
    },{
        title: 'My first painting',
        url: 'https://i.etsystatic.com/17192896/r/il/a06856/1553812356/il_570xN.1553812356_nd7a.jpg',
        price: 10
    },{
        title: 'My first painting',
        url: 'https://i.etsystatic.com/17192896/r/il/0ed94a/1601264759/il_570xN.1601264759_9m7i.jpg',
        price: 10
    },{
        title: 'My first painting',
        url: 'https://i.etsystatic.com/17192896/r/il/672993/1601264933/il_570xN.1601264933_2l3z.jpg',
        price: 10
    },{
        title: 'Seeking the Magic Mushroom',
        url: 'https://img.etsystatic.com/il/0ea1ac/1603466877/il_570xN.1603466877_kkxq.jpg?version=0',
        price: 10
    }]
}