Q2: What is the use of the keyof keyword in TypeScript? Provide an example.

Ans:

keyof কীওয়ার্ডটি একটি অবজেক্ট টাইপ থেকে তার প্রপার্টি কীগুলির ইউনিয়ন টাইপ (Union Type of Property Keys) পেতে ব্যবহৃত হয়।

* ব্যবহার: এটি টাইপ সেফটি নিশ্চিত করে যে আপনি যখন কোনো অবজেক্টের প্রপার্টি অ্যাক্সেস করছেন, তখন প্রপার্টির নামটি অবজেক্টের সংজ্ঞায়িত কীগুলির মধ্যে একটি।

* ফলাফল: এটি একটি স্ট্রিং লিটারেল ইউনিয়নের টাইপ প্রদান করে, যেখানে স্ট্রিংগুলো হল অবজেক্টের কী-এর নাম।

```typescript
type Product = {
    id: number;
    name: string;
    price: number;
};

type ProductKeys = keyof Product; 

function getProductValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
const laptop: Product = { id: 1, name: "Lenovo", price: 55000 };

const productName: string = getProductValue(laptop, "name");
console.log(productName);
```

Q3: Explain the difference between any, unknown, and never types in TypeScript.

Ans:

any (যেকোনো)

* বৈশিষ্ট্য: এটি TypeScript-এর সবচেয়ে শিথিল টাইপ।

* ব্যবহার: যখন একটি ভেরিয়েবলের টাইপ জানা যায় না বা আপনি টাইপ চেকিং সম্পূর্ণভাবে এড়িয়ে যেতে চান।

* ফল: any টাইপ করা ভেরিয়েবল দিয়ে আপনি যেকোনো অপারেশন করতে পারেন, যেমন: ফাংশন কল করা, প্রপার্টি অ্যাক্সেস করা ইত্যাদি। TypeScript কম্পাইলার কোনো ত্রুটি ধরবে না, ফলে এটি রান-টাইম ত্রুটির ঝুঁকি বাড়িয়ে দেয়।



unknown (অজানা)

* বৈশিষ্ট্য: এটি any-এর তুলনায় বেশি নিরাপদ।

* ব্যবহার: যখন আপনি জানেন যে একটি ভেরিয়েবলের টাইপ কী হবে, কিন্তু সেটির টাইপ নির্ধারণ করার আগে আপনাকে অবশ্যই এর টাইপটি সংকীর্ণ (narrow) করতে হবে।

* ফল: unknown টাইপ করা ভেরিয়েবলের উপর কোনো অপারেশন করার আগে আপনাকে অবশ্যই একটি টাইপ চেক (যেমন: if (typeof value === 'string')) করতে হবে।



never (কখনোই না)

* বৈশিষ্ট্য: এটি TypeScript-এর সবচেয়ে কঠোর টাইপ।

* ব্যবহার: এই টাইপটি এমন মানগুলির প্রতিনিধিত্ব করে যা কখনোই ঘটবে না। এটি সাধারণত দুটি ক্ষেত্রে ব্যবহৃত হয়:

    * একটি ফাংশন যা কখনোই শেষ হয় না (যেমন: একটি অনন্ত লুপ বা while(true))।

    * একটি ফাংশন যা একটি ব্যতিক্রম (exception) ছুঁড়ে দেয়।