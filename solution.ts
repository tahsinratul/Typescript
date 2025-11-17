//Problem 1

type FormatValueType = string | number | boolean;
type FormatReturnValue = string | number | boolean;

function formatValue(value: FormatValueType): FormatReturnValue {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else if (typeof value === 'boolean') {
    return !value;
  }

  throw new Error("Invalid value type provided.");
}


console.log(formatValue('ratul')); 
console.log(formatValue(10));     
console.log(formatValue(true)); 



//Problem 2

type LengthInput = string | any[];

function getLength(value: LengthInput): number {
  if (typeof value === 'string') {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  throw new Error("Input is neither a string nor an array.");
}


console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));



//Problem 3

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}


const person1 = new Person('John Doe', 30);
console.log(person1.getDetails()); 
const person2 = new Person('Alice', 25);
console.log(person2.getDetails());



//Problem 4

interface RatedItem {
  title: string;
  rating: number;
}

function filterByRating(items: RatedItem[]): RatedItem[] {
  return items.filter(item => item.rating >= 4);
}


const books: RatedItem[] = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 4.8 },
];


console.log(filterByRating(books));



//Problem 5

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};


function filterActiveUsers(users: User[]): User[] {

  return users.filter(user => user.isActive === true);
}

const users: User[] = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];


console.log(filterActiveUsers(users));



//Problem 6

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? 'Yes' : 'No';
  const details = `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;

  console.log(details);
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);



//Problem 7

function getUniqueValues<T extends string | number>(arr1: T[], arr2: T[]): T[] {
  const combinedArray: T[] = [];
  const seen: { [key: string]: boolean } = {};
  

  const processArray = (arr: T[]) => {
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
     
      const key = String(value);

      if (!seen[key]) {
        seen[key] = true;
       
        combinedArray[combinedArray.length] = value;
      }
    }
  };

  processArray(arr1);
  processArray(arr2);

  return combinedArray;
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));



//Problem 8

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}


function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }


  const individualPrices = products.map(product => {
    const basePrice = product.price * product.quantity;
    
   
    if (product.discount !== undefined && product.discount > 0) {
      const discountAmount = basePrice * (product.discount / 100);
      return basePrice - discountAmount;
    }
    return basePrice;
  });

 
  const totalPrice = individualPrices.reduce((total, currentPrice) => total + currentPrice, 0);

  return totalPrice;
}


const products: Product[] = [
  { name: 'Pen', price: 10, quantity: 2 },                    
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 }, 
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },     
];


console.log(calculateTotalPrice(products));

//End