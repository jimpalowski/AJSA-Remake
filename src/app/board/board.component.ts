import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [PostService]
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
