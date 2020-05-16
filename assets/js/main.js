/////////////////////////////
/* ForEach Aufgabe Level 1.5 */
/////////////////////////////
var test = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
  ];
  test.forEach(function(val, index, array){
    if ( val / 3 !=0) {
        array[index] = val +=100;
    }  
    else{
        array[index] = val += 0;
    }
  

   /*  if (item / 3 ) {
    return item +=100
    }
    else{

    } */
  });
  console.log(test);

/////////////////////////////
/* ForEach Aufgabe Level 1.1 */
/////////////////////////////
let drinks=[  "Coca-Cola",
"Apfelsaft",
"Pepsi",
"Traubensaft",
"Sprite",
"Orangensaft",
"Red Bull Energy Drink",
"Fanta"
]
drinks.sort().forEach(item=> {
    console.log(item);
})
console.log(drinks);
