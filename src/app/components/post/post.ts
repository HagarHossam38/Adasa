import { Component, Input, input } from '@angular/core';
import { IPost } from '../../interfaces/ipost';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-post',
  imports: [RouterLink],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {
  @Input() article: any;
  months = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
  ];

  formatDateArabic(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' });
  }
}
