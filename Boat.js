function Answer(data) {
  var newData = data.replace(";", ",");
  var array = newData.split(",");
  var intArray = array.map((item) => parseInt(item));
  var boatCapacity = intArray[intArray.length - 1];
  var boatCount = 0;
  var weightsArray = [];
  for (var i = 0; i < intArray.length - 1; i++) {
    weightsArray.push(intArray[i]);
  }
  weightsArray = weightsArray.sort((a, b) => a - b);
  console.log(`weights are : ${weightsArray}`);
  console.log(`boat capacit is : ${boatCapacity}`);
  for (var i = 0; i <= weightsArray.length - 1; i++) {
    if (
      weightsArray[i + 1] &&
      weightsArray[i] + weightsArray[i + 1] <= boatCapacity
    ) {
      boatCount += 1;
      i += 1;
    } else if (weightsArray[i] <= boatCapacity) {
      boatCount += 1;
    }
  }
  console.log(`no. of boats are ${boatCount}`);
  console.log();
}

Answer("100,200,150,80;200"); //3
Answer("100,120,150,80;200"); //3
Answer("100,200,150,80,10, 20, 30;200"); //5
