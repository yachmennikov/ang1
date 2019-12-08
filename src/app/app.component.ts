import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 posts: Post[] = [
   {title: 'learn angular', text: 'suckdicker'},
   {text: 'fgfgfgf', title: 'fgfgf', id: 3}
 ]

 ngOnInit() {
    setTimeout( () => {
      console.log('time out')
    }, 5000)
 }

 updatePosts(post: Post) {
   console.log('Post', post);
   this.posts.unshift(post);
 }

}
