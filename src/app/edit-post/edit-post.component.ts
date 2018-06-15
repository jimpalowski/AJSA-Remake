import { Component, Input,  OnInit } from '@angular/core';
import { PostService } from '../post.service';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
  providers: [PostService]
})
export class EditPostComponent implements OnInit {
  @Input() selectedPost;
  constructor(private postService: PostService) { }

  ngOnInit() {
  }
  beginUpdatingPost(postToUpdate){
    this.postService.updatePost(postToUpdate);
  }

  beginDeletingPost(postToDelete){
    if(confirm("Are you sure you want to delete this post?")){
      this.postService.deletePost(postToDelete);
    }
  }
}
