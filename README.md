# WHETHER APP

## Introduction
**Have you always wanted to plan your day ahead but had to keep checking the weather or weather forecasts in order to know how to properly plan you day to day activities?**

**Here's a solutiuon for you.**

**A weather app that has a to do list section.**

## Technologies Used
**This project is created with:**
*HTML,*
*CSS,*
*ES2015 JavaScript,*
*weather api from api.openweathermap.org*



class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
    speak(name) {
      return `${this.name} says meow!`;
    }
  }
  
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
    speak(name) {
      return `${this.name} says woof!`;
    }
  }
  
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
    speak(name, sex) {
      if (this.sex === "male") {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }