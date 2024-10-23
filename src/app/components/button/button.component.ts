import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

type ButtonType = 'primary' | 'secondary';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() title?: string;
  @Input() onClick?: () => void;
  @Input() icon?: string;
  @Input() type?: ButtonType;
  @Input() isOutline?: boolean;
  @Input() isTransparent?: boolean;
  @Input() href?: string;
  @Input() class?: string;

  buttonType: ButtonType = this.type || 'primary';
  buttonClass: string = this.class || '';

  getBgColor = () => {
    if (this.isOutline) {
      return `bg-[#fff] border text-[#00925d] border-[#00925d] hover:bg-[#66ffc7]`;
    }
    if (this.isTransparent) {
      return `bg-transparent border text-[#FFF] border-[#FFF]`;
    }
    return `text-white bg-[#00925d] border border-[#00925d] hover:bg-[#008051] hover:border-[#008051]`;
  };
}
