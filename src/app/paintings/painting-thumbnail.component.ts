import { Component, Input } from '@angular/core';

@Component({
    selector:'painting-thumbnail',
    templateUrl:'painting-thumbnail.component.html',
    styleUrls:['painting-thumbnail.component.css']
})

export class PaintingThumbnailComponent{
 @Input() paintings: Painting[]

}

interface Painting{
    title: string,
    url: string,
    price: number
}