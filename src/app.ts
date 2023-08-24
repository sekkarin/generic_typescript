// const names: Array<string> = [];
// // names[0].split(' ')
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });
// promise.then((data) => {
//   // data.split(' ')
// });
// // extends  constraints คือการจำกัด type params
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }
// // const mergeObj = merge({ name: "ken" ,hobbies:["Games"]}, 30); error type ไม่ตรง เพราะเราทำการ constraints type
// const mergeObj = merge({ name: "ken", hobbies: ["Games"] }, { age: 30 });
// console.log(mergeObj);

// function gerenric
// interface Lengthy {
//   length: number;
// }

// // function gerenric
// function countAndDescribe<T extends Lengthy>(element: T) {
//   let describeText = "Got no value";
//   if (element.length === 1) {
//     describeText = "Got 1 element";
//   } else if (element.length > 1) {
//     describeText = "Got more than one  " + element.length + " elements";
//   }
//   return [element, describeText];
// }
// console.log(countAndDescribe("Hi there!"));
// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) {
//   return "value " + obj[key];
// }

// console.log(
//   extractAndConvert({ name: "kemi", lastName: "Lastname" }, "lastName")
// );

// // generic Utillty Types
// interface CourseGoal {
//   title: string;
//   description: string;
//   completeUntil: Date;
// }
// function createCourseGoal({
//   title,
//   description,
//   completeUntil,
// }: CourseGoal): CourseGoal {
//   // Partial เป็นชนิดข้อมูลใน TypeScript ที่ใช้ในการกำหนดว่าอาจจะมีคุณสมบัติบางอย่างของอ็อบเจ็กต์ไม่สามารถถูกกำหนดค่าได้ในขณะที่กำหนดค่าคุณสมบัติอื่น ๆ
//   // ของอ็อบเจ็กต์นั้น ๆ ได้ ซึ่งช่วยให้คุณสร้างอ็อบเจ็กต์ที่สามารถถูกกำหนดค่าคุณสมบัติบางส่วนในภายหลังได้.
//   let courseGoal: Partial<CourseGoal> = {};

//   courseGoal.title = title;
//   courseGoal.description = description;
//   courseGoal.completeUntil = completeUntil;
//   return courseGoal as CourseGoal;
// }

// const names_readonly: Readonly<string[]> = ["Ken", "Foo"];
// Property 'push' 'pop' does not exist on type 'readonly string[]
// names_readonly.push("menu")
// names_readonly.pop("menu")

// generic types vs Union types
class DataStorage<T extends string| number|boolean> {
  // constructor(parameters) {

  // }
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item:T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItem() {
    return [...this.data];
  }
}
const textStorage = new DataStorage<string>();
textStorage.addItem("ken");
textStorage.addItem("menu");
textStorage.removeItem("menu");
console.log(textStorage.getItem());
const numberStorage = new DataStorage<number>();
textStorage.addItem("ken");
textStorage.addItem("menu");
textStorage.removeItem("menu");
console.log(textStorage.getItem());

