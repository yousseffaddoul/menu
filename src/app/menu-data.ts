export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  image?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const LEBANESE_KAAKE: MenuItem[] = [
  { name: 'KAAKE AKKAWI', description: 'Freshly baked sesame kaake filled with melted Akkawi cheese.', price: '$3.50' },
  { name: 'KAAKE MOZZARELLA', description: 'Crispy Lebanese kaake stuffed with creamy mozzarella cheese.', price: '$3.00' },
  { name: 'KAAKE 4 CHEESE', description: 'A rich blend of mozzarella, cheddar, akkawi & kashkawan cheeses.', price: '$4.00' },
  { name: 'KAAKE PICON', description: 'Traditional Lebanese kaake filled with creamy Picon cheese.', price: '$2.50' },
  { name: 'KAAKE KASHKAWAN', description: 'Fresh oven-baked kaake with delicious melted Kashkawan cheese.', price: '$3.50' },
  { name: 'KAAKE SEMMAK', description: 'Fresh oven-baked kaake with semmak', price: '$1.50' },
  { name: 'NUTELLA KAAKE', description: 'Sweet kaake filled with Nutella chocolate.', price: '$3.50' }
];

export const HOT_BEVERAGES: MenuItem[] = [
  { name: 'Coffee', price: '$1.00' },
  { name: 'Nescafee', price: '$1.50' },
  { name: 'Cappuccino', price: '$1.50' },
];

export const COLD_DRINKS: MenuItem[] = [
  { name: 'Pepsi', price: '$1.00' },
  { name: 'Small Water', price: '$0.25' },
  { name: 'Uno Milkshake', price: '$0.50' },
  { name: 'Bonjus', price: '$0.25' },
];

export const ARGUILE: MenuItem[] = [
  { name: 'Double Apple', price: '$5.00' },
  { name: 'Mint and Lemon', price: '$5.00' },
];

