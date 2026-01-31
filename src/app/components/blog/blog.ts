import { IPost } from './../../interfaces/ipost';
import { Component, inject } from '@angular/core';
import { SectionLabel } from "../section-label/section-label";
import { PingDot } from "../ping-dot/ping-dot";
import { GridBackground } from "../grid-background/grid-background";
import { ICategory } from '../../interfaces/icategory';
import { Post } from "../post/post";
import { HorizontalPost } from "../horizontal-post/horizontal-post";
import { DataService } from '../../services/data/data-service';
@Component({
  selector: 'app-blog',
  imports: [SectionLabel, PingDot, GridBackground, Post, HorizontalPost],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  dataService = inject(DataService);
  blogPosts: IPost[] = this.dataService.blogPosts;
  categories: ICategory[] = this.dataService.categories;

  filteredPosts: IPost[] = this.blogPosts;
  filteredPostsLength: number = this.filteredPosts.length;

  activeCategory: string = 'all';
  activeDisplayStle: string = 'grid';

  pageIndex: number = 1;
  pageSize: number = 6;




  setActiveFilter(categoryName: string) {
    this.activeCategory = categoryName;
    this.pageIndex = 1;
    this.filterByCategory();
    this.filteredPostsLength = this.filteredPosts.length;
    this.updatePagesCount();

  }
  filterByCategory(): void {
    this.filteredPosts = [];
    if (this.activeCategory === 'all') {
      this.filteredPosts = this.blogPosts;
    }
    else {
      this.filteredPosts = this.blogPosts.filter(post => post.category == this.activeCategory);
    }

  }

  searchPost(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.toLowerCase();
    this.filterByCategory();
    this.filteredPosts = this.filteredPosts.filter(post =>
      (post.title && post.title.toLowerCase().includes(value)) ||
      (post.content && post.content.toLowerCase().includes(value)) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(value))
    );

    this.filteredPostsLength = this.filteredPosts.length;
    this.updatePagesCount();
  }
  setActiveDisplay(style: string) {
    this.activeDisplayStle = style;
  }

  pages: number[] = [1, 2, 3, 4, 5];

  updatePagesCount(): void {
    this.pages = []
    let pagesCount = Math.ceil(this.filteredPostsLength / this.pageSize);
    console.log(pagesCount);
    for (let i = 1; i <= pagesCount; i++) {
      this.pages.push(i);
    }
  }
  setPostsPage(page: number) {
    this.pageIndex = page;
    this.scrollToFilteredPosts();
  }

  prevPage() {
    this.pageIndex -= 1;
    this.scrollToFilteredPosts();
  }
  nextPage() {
    this.pageIndex += 1;
    this.scrollToFilteredPosts();
  }

  scrollToFilteredPosts(): void {
    const section = document.getElementById('filtered-posts');
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }


}
