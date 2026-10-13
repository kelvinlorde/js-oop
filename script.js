// ----------------------------------------------------
// 1.
// ----------------------------------------------------
class Person{
    constructor(name, age, country){
    this.name = name,
    this.age = age,
    this.country = country
    }
    details(){
        console.log("Personal Details: ",this.name,this.age,this.country)
        return this;
    }
};

const personOne = new Person("Adellay", 24, "United Kingdom");
const personTwo = new Person("Koulibaly", 29, "France");

personOne.details();
personTwo.details();

// -----------------------------------------------------
// 2.
// -----------------------------------------------------

class Rectangle{
    constructor(width, height){
        this.width = width,
        this.height = height
    }
    area(){
        const areaRectangle  = this.width * this.height;
        console.log("Rentangle: ", areaRectangle);
        return this;
        // return this.width * this.height;
    }

    perimeter(){
        const perimeterRectangle = 2 * (this.height + this.width);
        console.log("Perimeter: ", perimeterRectangle);
        return this;
        // return 2 * (this.height + this.width);
    }

};

const rectangleOne = new Rectangle(20, 8);


rectangleOne.perimeter();
rectangleOne.area();


// -----------------------------------------------------
// 3.
// -----------------------------------------------------

class Vehicle{
    constructor(make, model, year){
        this.make = make,
        this.model = model,
        this.year = year
    }
    displayDetails(){
        console.log("Make: ", this.make);
        console.log("Model: ", this.model);
        console.log("Year: ", this.year);
    }
}

class Car extends Vehicle{
    constructor(make, model, year, numberOfDoors) {
        super(make, model, year);
        this.numberOfDoors = numberOfDoors;

    }
    displayDetails(){
        super.displayDetails();
        console.log("Number of Doors:", this.numberOfDoors)
    }
};



const carOne = new Car("Toyota", "LandCrusier", 2025, 4)

carOne.displayDetails();

// -----------------------------------------------------
// 4.
// -----------------------------------------------------

class BankAccount{
    constructor(accountNumber, balance){
        this.accountNumber = accountNumber,
        this.balance = balance
    }

    deposit(amount){
        if(amount <= 0){
            console.log("Deposit amount must be positive.");
            return;
        }

        this.balance += amount;
        console.log("Deposited: ", amount);
    }
    withdrawal(amount){
        if (amount <= 0) {
      console.log("Withdrawal amount must be positive.");
      return;
    }

    if (amount > this.balance) {
      console.log("Insufficient funds.");
      return;
    }

    this.balance -= amount;
    console.log("Withdrawn:", amount);
    }
    
    displayBalance(){
        console.log("Account: "+ this.accountNumber);
        console.log("Balance: ", this.balance);
    }
}
const account1 = new BankAccount("1001968390", 5000);
const account2 = new BankAccount("1002234455", 3000);

// Perform transactions
account1.deposit(2000);
account1.withdrawal(1500);

account2.deposit(1000);
account2.withdrawal(500);

console.log("---------------");
account1.displayBalance();
console.log("---------------");
account2.displayBalance();