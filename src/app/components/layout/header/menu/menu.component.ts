import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Menu } from './menu.type';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuList: Menu[] = [
    {
      title: 'Trang chủ',
      link: '/'
    },
    {
      title: 'Phim mới',
      link: '/phim-moi'
    },
    {
      title: 'Phim bộ',
      link: '/phim-bo'
    },
    {
      title: 'Phim lẻ',
      link: '/phim-le'
    },
    {
      title: 'Trailer',
      link: '/trailer'
    }
  ]
}
