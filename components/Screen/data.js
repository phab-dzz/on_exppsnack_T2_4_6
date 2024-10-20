export const productsData = [
  {
    category: 'Smart Phone',
    products: {
      bestSales: [
        { id: 1, name: 'iPhone 13', price: 999,url:require('../../img/1.png')},
        { id: 2, name: 'Samsung Galaxy S21', price: 850,url:require('../../img/2.png') },
        { id: 3, name: 'OnePlus 9', price: 700,url:require('../../img/3.png')},
        { id: 4, name: 'Google Pixel 6', price: 600,url:require('../../img/4.png') },
        { id: 5, name: 'Xiaomi Mi 11', price: 500 ,url:require('../../img/1.png')},
      ],
      bestMatched: [
        { id: 1, name: 'iPhone 13 Pro', price: 1099,url:require('../../img/1.png') },
        { id: 2, name: 'Samsung Galaxy Z Fold', price: 1300,url:require('../../img/4.png') },
      ],
      popular: [
        { id: 1, name: 'iPhone 12', price: 800 ,url:require('../../img/1.png')},
        { id: 2, name: 'Samsung Galaxy Note 20', price: 200,url:require('../../img/2.png') },
      ]
    }
  },
  {
    category: 'iPad',
    products: {
      bestSales: [
        { id: 1, name: 'iPad Pro', price: 1100,url:require('../../img/ipad.png') },
        { id: 2, name: 'iPad Air', price:   500,url:require('../../img/ipad.png')},
      ],
      bestMatched: [
        { id: 1, name: 'iPad Mini', price: 400,url:require('../../img/ipad.png')},
      ],
      popular: [
        { id: 1, name: 'iPad Pro M1', price: 1200 ,url:require('../../img/ipad.png')},
        { id: 2, name: 'iPad 9th Gen', price: 350,url:require('../../img/ipad.png') },
      ]
    }
  },
  {
    category: 'MacBook',
    products: {
      bestSales: [
        { id: 1, name: 'MacBook Pro M1', price: 2400,url:require('../../img/macbook.png') },
        { id: 2, name: 'MacBook Air', price: 999,url:require('../../img/macbook.png') },
      ],
      bestMatched: [
        { id: 1, name: 'MacBook Pro M2', price: 2500 ,url:require('../../img/macbook.png')},
      ],
      popular: [
        { id: 1, name: 'MacBook Air M1', price: 950 ,url:require('../../img/macbook.png')},
      ]
    }
  }
];
