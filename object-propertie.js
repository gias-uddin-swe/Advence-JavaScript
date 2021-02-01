const student = [
  { id: 21, name: "omor shunn" },
  { id: 31, name: "mannnaaa" },
  { id: 41, name: "moyoury" },
  { id: 71, name: "Depjol" },
];

const newArry = [];

for (let i = 0; i < student.length; i++) {
  const element = student[i];
  const result = element.name;
  newArry.push(result);
}
console.log(newArry);

const result = student.map((x) => x.name);

const result = student.filter((x) => x.id > 40);

console.log(result);
