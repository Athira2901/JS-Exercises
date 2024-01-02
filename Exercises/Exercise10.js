const a = {
  Parent: {
    Student: {
      Name: "Virat",
      Age: 24,
      Rollno: 34,
      marks: [{ English: 88 }, { Science: 75 }],
    },
    MobileNos: ["1234567890", "9087654321"],
  },
};
const b = { ...a };

b.Parent = Object.assign({}, a.Parent);

b.Parent.Student = Object.assign({}, a.Parent.Student);
b.Parent.Student.marks = [...a.Parent.Student.marks];
b.Parent.MobileNos = [...a.Parent.MobileNos];
b.Parent.Student.Name = "Athira Prasad";
b.Parent.Student.Age = 23;
b.Parent.Student.Rollno = 16;
b.Parent.Student.marks[0].English = 76;
b.Parent.MobileNos[1] = "5372839225";

console.log(JSON.stringify(a));
console.log(JSON.stringify(b));
