import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../shared/posts.service';
import { Ipost } from '../../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Ipost[];
  post: Ipost;
  title: string;
  content: string;

  constructor(
    private postsService: PostsService
  ) {
    this.post = {
      title: '',
      content: '',
    };
  }

  removePost(post: Ipost) {
    this.postsService.deletePost(post);
  }

  addPost() {
    if (this.title !== '' && this.content !== '') {
      this.post.title = this.title;
      this.post.content = this.content;
      this.postsService.addPost(this.post);
      this.title = '';
      this.content = '';
    }
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts().subscribe(res => {
      this.posts = res;
      console.log(this.posts);
    });
  }

}
