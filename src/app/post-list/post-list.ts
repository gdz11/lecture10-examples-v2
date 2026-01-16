import { Component, inject, OnInit, signal } from '@angular/core';
import { PostService } from '../shared/services/post-service';
import { Post } from '../shared/models/post';

@Component({
  selector: 'app-post-list',
  imports: [],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList implements OnInit {
  postService = inject(PostService);

  posts = signal<Post[]>([]);

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts.set(data);
    });
  }
  
  
}
