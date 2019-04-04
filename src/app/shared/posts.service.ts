import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Ipost } from '../models/post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsCollection: AngularFirestoreCollection<Ipost>;
  posts: Observable<Ipost[]>;
  postDoc: AngularFirestoreDocument<Ipost>;

  constructor(public afs: AngularFirestore) {
    this.postsCollection = this.afs.collection('posts', ref => ref.orderBy('title', 'asc'));

    this.posts = this.postsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Ipost;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );

  }

  getPosts(): Observable<Ipost[]> {
    return this.posts;
  }

  addPost(post: Ipost) {
    this.postsCollection.add(post).then(res => console.log(res));
  }

  deletePost(post: Ipost) {
    this.postDoc = this.afs.doc(`posts/${post.id}`);
    this.postDoc.delete().then(res => console.log(res));
  }


}
