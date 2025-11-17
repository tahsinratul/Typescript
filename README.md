Q2: What is the use of the keyof keyword in TypeScript? Provide an example.


keyof কীওয়ার্ডটি একটি অবজেক্ট টাইপ থেকে তার প্রপার্টি কীগুলির ইউনিয়ন টাইপ (Union Type of Property Keys) পেতে ব্যবহৃত হয়।

ব্যবহার: এটি টাইপ সেফটি নিশ্চিত করে যে আপনি যখন কোনো অবজেক্টের প্রপার্টি অ্যাক্সেস করছেন, তখন প্রপার্টির নামটি অবজেক্টের সংজ্ঞায়িত কীগুলির মধ্যে একটি।

ফলাফল: এটি একটি স্ট্রিং লিটারেল ইউনিয়নের টাইপ প্রদান করে, যেখানে স্ট্রিংগুলো হল অবজেক্টের কী-এর নাম।


Example:

type Product = {
    id: number;
    name: string;
    price: number;
}
<br>
type ProductKeys = keyof Product; 
<br>
function getProductValue<T, K extends keyof T>(obj: T, key: K): T[K] <br>{
    return obj[key];
}<br>
const laptop: Product = { id: 1, name: "Lenovo", price: 55000 };

const productName: string = getProductValue(laptop, "name");<br>
console.log(productName);