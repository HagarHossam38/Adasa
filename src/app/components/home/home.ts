import { DataService } from './../../services/data/data-service';
import { IAuthor } from './../../interfaces/iauthor';
import { Component, inject } from '@angular/core';
import { GridBackground } from "../grid-background/grid-background";
import { PingDot } from "../ping-dot/ping-dot";
import { SectionLabel } from "../section-label/section-label";
import { RouterLink } from "@angular/router";
import { IPost } from '../../interfaces/ipost';
import { ICategory } from '../../interfaces/icategory';
import { Post } from "../post/post";



@Component({
  selector: 'app-home',
  imports: [GridBackground, PingDot, SectionLabel, RouterLink, Post],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {



  dataService = inject(DataService);
  blogPosts: IPost[] = this.dataService.blogPosts;
  categories: ICategory[] = this.dataService.categories;
  months = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
  ];

  formatDateArabic(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' });
  }


}
