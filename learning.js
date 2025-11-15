// Task 1
let city = "Mumbai";
city = "Pune";city = "goa";


const builder = "Lodha";
const builders = "laxskl";
console.log(builders);



// Task 2
function square(n) {
  return n * n;
}
console.log(square(5));


const greetUser = (name) => {
  return `Hello ${name}`;
};
console.log(greetUser("Saklain"));



// Task 3 - Objects

const property = {
  title: "Luxury Heights",
  city: "Pune",
  price: 8500000,
  builder: "Lodha",
};
console.log(property);


// Task 4 - Arrays

const buildersList = ["Lodha", "Godrej", "Oberoi"];
console.log(buildersList);

buildersList.map((bl) => {
  console.log("Project name:", bl);
});



const builderName = buildersList.filter(name => name === "Lodha");
console.log("My Builder:", builderName);




// Task 5 - map()

const projects = ["Project A", "Project B", "Project C"];
projects.map((p) => {
  console.log("Project name:", p);
});


// Task 6 - filter()

const prices = [50, 120, 80, 200, 500, 25];

// filter all values above 100
const highPrices = prices.filter(price => price > 100);

console.log("Prices above 100:", highPrices);





// Task 7 - async/await

const fetchData = async () => {
  return "Data loaded successfully!";
};

console.log(fetchData());




const printData = async () => {
  const result = await fetchData();
  console.log(result);
};

printData();


