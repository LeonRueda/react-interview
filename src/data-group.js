// Given an array of objects (*arrSalary*); create a new object based on the following structure (*arrSalaryByCity*).
// Use MyExpect to compare that the objects actually match.

const arrSalary = [
  { city: "Washington", name: "Paul", salary: 200 },
  { city: "SanAntonio", name: "Amie", salary: 350 },
  { city: "Glendale", name: "Sofie", salary: 100 },
  { city: "Garland", name: "Josh", salary: 2500 },
  { city: "Washington", name: "George", salary: 10 },
  { city: "SantaAna", name: "Amber", salary: 320 },
  { city: "Anaheim", name: "Susan", salary: 3200 },
  { city: "Anaheim", name: "Strawberry", salary: 290 },
  { city: "Washington", name: "Dan", salary: 200 },
  { city: "Glendale", name: "Master", salary: 205 }
];

const arrSalaryByCity = {
  Washington: [
    { name: "Paul", salary: 200 },
    { name: "George", salary: 10 },
    { name: "Dan", salary: 200 }
  ],
  SanAntonio: [{ name: "Amie", salary: 350 }],
  Glendale: [{ name: "Sofie", salary: 100 }, { name: "Master", salary: 205 }],
  Garland: [{ name: "Josh", salary: 2500 }],
  SantaAna: [{ name: "Amber", salary: 320 }],
  Anaheim: [
    { name: "Susan", salary: 3200 },
    { name: "Strawberry", salary: 290 }
  ]
};

const byCity = (salaries = arrSalary) => {
  return salaries.reduce((acc, item) => {
    return {
      ...acc,
      [item.surname]: [
        ...(acc[item.surname] || []),
        { name: item.name, salary: item.salary }
      ]
    };
  }, {});
};
