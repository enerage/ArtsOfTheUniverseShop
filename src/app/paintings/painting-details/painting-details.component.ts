import { Component, OnInit } from '@angular/core';
import { PaintingService } from '../../shared/painting.service'

@Component({
  selector: 'app-painting-details',
  templateUrl: './painting-details.component.html',
  styleUrls: ['./painting-details.component.css']
})
export class PaintingDetailsComponent implements OnInit {

  constructor(private paintingService:PaintingService) {

   }

  ngOnInit() {
    this.painting = this.paintingService.getPainting(1);
  }

}
