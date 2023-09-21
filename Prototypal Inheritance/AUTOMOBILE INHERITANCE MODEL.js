// AUTOMOBILE INHERITANCE MODEL
// Prototypal Inheritance
// Level: 1
// Type: Implementation
// Avg Duration: 1 Hrs
// Problem Statement :-
// You have been appointed as senior developer in Tata’s R&D department.
//  The engineers there are lazy, they don’t want to do everything from scratch whenever they create a new model.
//   They expect you to help them create an inheritance model for the automobiles.

// Description :-
// Implement an inheritance model for four wheeler automobiles.
// Implement using both object.create() and constructor functions().
// Think of properties of what can be inherited.


function Automobile_Inheritance_Model(brand,model,speed,fuelType){

    this.brand=brand;
    this.model=model;
    this.speed= speed;
    this.fuelType=fuelType;


}

function Car(brand,model,speed,fuelType,numberOfWheels,numberOfEngines){
    Automobile_Inheritance_Model.call(this,brand,model,speed,fuelType);
    this.numberOfWheels=numberOfWheels;
    this.numberOfEngines=numberOfEngines
}

Car.prototype=Object.create(Automobile_Inheritance_Model.prototype);

Car.prototype.improvWithSafety=function(){
    console.log(`${this.brand} , ${this.model} airbag safety is added `)
}

let carInfo= new Car ("toyo","WEX$789","300kpm","Petrol","4-wheel","2-Engine");
console.log(carInfo)
carInfo.improvWithSafety()
