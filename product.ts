export interface Product {
  id: number;
  item: string;
  price: number;
  quantity: number;
  description: string;
}

export const products = [
  {
    id: 1,
    item: 'rice bag',
    price: 1200,
    quantity: 10,
    description: 'A 10kg bag with basmati rice',
  },
  {
    id: 2,
    item: 'wheat bag',
    price: 1400,
    quantity: 15,
    description: 'A large and fine wheat grain flour',
  },
  {
    id: 3,
    item: 'biscuit packet',
    price: 40,
    quantity: 100,
    description: 'nestel company fine biscuit with added flavours and cream',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
