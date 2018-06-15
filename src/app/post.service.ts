import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Post } from './post.model';
import { POSTS } from './mock-posts';


@Injectable()
export class PostService {
 posts: FirebaseListObservable<any[]>;
 constructor(private database: AngularFireDatabase) {
  this.posts = database.list('posts');
}

getPosts(){
  return this.posts;
}

addPost(newPost: Post){
  this.posts.push(newPost);
}

getPostById(postId: string){
  return this.database.object('albums/' + postId);
}

updatePost(localUpdatedPost){
  var postEntryInFirebase = this.getPostById(localUpdatedPost.$key);
  postEntryInFirebase.update({title: localUpdatedPost.title,
                              author: localUpdatedPost.author,
                              description: localUpdatedPost.description});

}
deletePost(localPostToDelete){
   var postEntryInFirebase = this.getPostById(localPostToDelete.$key);
   postEntryInFirebase.remove();
 }

}
