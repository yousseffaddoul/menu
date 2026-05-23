import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  LEBANESE_KAAKE, 
  HOT_BEVERAGES, 
  COLD_DRINKS, 
 
  ARGUILE, 
  
} from '../menu-data';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  kaakeItems = LEBANESE_KAAKE;
  hotBeverages = HOT_BEVERAGES;
  coldDrinks = COLD_DRINKS;
  arguileItems = ARGUILE;


}
