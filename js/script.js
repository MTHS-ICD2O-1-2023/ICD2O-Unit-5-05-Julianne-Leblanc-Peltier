// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: May 2024
// This file contains the JS functions for index.html


function myButtonClicked() {
  // length variables
  const lengthA = parseFloat(document.getElementById("length-a-of-triangle").value)
  const lengthB = parseFloat(document.getElementById("length-b-of-triangle").value)
  const lengthC = parseFloat(document.getElementById("length-c-of-triangle").value)

  //  angle variables - calculation
  const angleA = Math.acos((lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)) * (180 / Math.PI)
  const angleB = Math.acos((lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)) * (180 / Math.PI)
  const angleC = Math.acos((lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)) * (180 / Math.PI)

  // sum of angles to determine whether it is a triangle
  const sumOfAngles = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2))

  if (sumOfAngles == 180){
    if (angleA == angleB == angleC) {
      // equilateral
      document.getElementById("type-of-triangle").innerHTML = "This is an equilateral triangle!"
    } else if ((angleA == angleC) || (angleA == angleB) || (angleB == angleC)) {
      // isosceles triangle
      document.getElementById("type-of-triangle").innerHTML = "This is an isosceles triangle!"
    } else {
      // scalene triangle
      document.getElementById("type-of-triangle").innerHTML = "This is a scalene triangle!"
    }
  } else {
    document.getElementById("type-of-triangle").innerHTML = "Sorry! This is not a triangle!"
  }
}
