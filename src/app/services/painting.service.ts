import { Injectable } from '@angular/core'

@Injectable()
export class PaintingService{
    getPaintings(){
        return PAINTINGS;
    }

    getPainting(id:number){
        return PAINTINGS.find(painting => painting.id === id)
    }
}



const PAINTINGS = [];