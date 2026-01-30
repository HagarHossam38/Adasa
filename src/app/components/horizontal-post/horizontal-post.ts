import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-post',
  imports: [],
  templateUrl: './horizontal-post.html',
  styleUrl: './horizontal-post.css',
})
export class HorizontalPost {
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
