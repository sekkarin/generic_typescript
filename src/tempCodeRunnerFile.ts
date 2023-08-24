
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

// const names_readonly