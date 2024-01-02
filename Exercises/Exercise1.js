let array = ["apple", "banana", "mango"];
array.forEach((fruits) => {
  console.log(fruits);
});
console.log();

let array1 = [{ fruit: "apple" }, { fruit: "banana" }, { fruit: "mango" }];
array1.map((fruits) => {
  console.log(fruits.fruit);
});
console.log();

let object = { fruit1: "apple", fruit2: "banana", fruit3: "mango" };
for (let i in object) {
  console.log(object[i]);
}
