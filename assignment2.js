// Assignment 2 - Huan Li
// forEach()
 const myforEach = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
      func(arr[i]);
    }
  }
  
  // forEach() test
  console.log("forEach() test");
  myforEach([1,2,3,4,5], (num) => console.log(num * 6));
  /* output: forEach() test
  6
  12
  18
  24
  30 */
  
  
   // map()
  const myMap = (arr, func) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      newArr.push(func(arr[i]));
    }
  
    return newArr;
  }
  
  // map() test
  console.log("map() test");
  let arr2 = myMap([5,5,6,6], (num) => num * 2);
  console.log(arr2);
   /*output: map() test
  [ 10, 10, 12, 12 ] */
  

  // filter()
  const myFilter = (arr, func) => {
    let newArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      func(arr[i]) ? newArr.push(arr[i]) : null;
    }
  
    return newArr;
  }
  
  // filter() test
  console.log("filter() test");
  let arr3 = myFilter([7,8,9,5], (num) => num >= 6);
  console.log(arr3);
 /* output:filter() test
  [ 7, 8, 9 ]*/
  
  // some()
  const mySome = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])) 
      return true;
    }
    return false;
  }
  
  // some() test
  console.log("some() test");
  console.log(mySome([0,-3,7,6,9], (num) => num % 3 === 0));
  /* output:some() test
  true */
  
  // every()
  const myEvery = (arr, func) => {
    let bool = true;
    for (let i = 0; i < arr.length; i++) {
      if (!func(arr[i])) 
      bool = false;
    }
  
    return bool;
  }
  
  // every() test
  console.log("every() test");
  console.log(myEvery([4,6,8,12,18], (num) => num % 4 === 0));
  /* output:every() test
  false */
  
  
  // reduce()
  const myReduce = (arr, func) => {
    let acc = arr[0], curr;
    
    for (let i = 1; i < arr.length; i++) {
      curr = arr[i];
      acc = func(acc, curr);
    }
  
    return acc;
  }
  
  // reduce() test
  console.log("reduce() test");
  console.log(myReduce([2,3,3,3], (acc, curr) => acc + curr));
  /* output:reduce() test
  11 */
  
  // includes()
  const myIncludes = (arr, elem) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === elem) 
      return true;
    }
  
    return false;
  }
  
  // includes() test
  console.log("includes() test");
  console.log(myIncludes([6,6,6,3], 3));
  /* output:includes() test
  true */
  
  // indexOf()
  const myIndexOf = (arr, elem) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === elem) 
      return i;
    }
  
    return -1;
  }
  
  // indexOf() test
  console.log("indexOf() test");
  console.log(myIndexOf([6,7,8,9], 6));
  /* output: indexOf() test
  0 */
  
  // push()
  const myPush = (arr, elem) => {
    return [...arr, elem]
  }
  
  // push() test
  console.log("push() test");
  let myArr = [2,3,3,3,3];
  console.log("Array before push: " + myArr)
  myArr = myPush(myArr, 6);
  console.log("Array after push: " + myArr)
  /* output: push() test
  Array before push: 2,3,3,3,3
  Array after push: 2,3,3,3,3,6 */
  
  // lastIndexOf()
  const myLastIndexOf = (arr, elem) => {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === elem) 
      return i;
    }
  
    return -1;
  }
  
  // lastIndexOf() test
  console.log("lastIndexOf() test")
  console.log(myLastIndexOf([8,7,6,5,4,1], 2));
  /* output:lastIndexOf() test
  -1 */
  
  // Object.keys()
  const grabKeys = (obj) => {
    let arr = [];
    for (const prop in obj) {
      arr.push(prop);
    }
    
    return arr;
  }
  
  // Object.keys() test
  console.log("Object.keys() test")
  console.log(grabKeys({a: 1, b: 2, c: 3}));
  /* output: Object.keys() test
  [ 'a', 'b', 'c' ] */
  
  // Object.values()
  const grabValues = (obj) => {
    let arr = [];
    for (prop in obj) {
      arr.push(obj[prop]);
    }
    
    return arr;
  }
  
  // Object.values() test
  console.log("Object.values() test")
  console.log(grabValues({a: 1, b: 2, c: 3}));   
  /* output: Object.values() test
  [ 1, 2, 3 ] */