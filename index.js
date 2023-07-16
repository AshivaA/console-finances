var finances = [
  // column0= strings  column1 =number
  ['Jan-2010', 867884],//row = 0
  ['Feb-2010', 984655],//row = 1
  ['Mar-2010', 322013],//row = 2
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];




console.log("Financial Analysis");
console.log("---------------------------");
console.log("Total Month: " + finances.length);

//Total section
// Total=0 (value 0)
var Total = 0;

for (var index = 0; index < finances.length; index++) {

  //new Total =   old Total(will update in every loop) + finances[index(row)][1(number column)](this is the address of index in array finances).
  Total = Total + finances[index][1];

}

console.log("Total = $" + Total)


//Average changes section

var total_changes = 0;
// we should consider (finances.length -1) because every loop uses a component from next row (ex: row 1 - row 0 or the new row - previous row) so, in the last row (row 85), there is no next row and loop should stop at row 84(row 85- row 84).
for (var index = 0; index < finances.length - 1; index++) {
//new total_changes = old total_changes + (finances[index+1][1]-finances[index][1]) or(new row - previous row );
  total_changes = total_changes + (finances[index+1][1]-finances[index][1]);

}

var average = 0;
//( average = total_changes ÷ (finances.length - 1); )
average = total_changes / (finances.length - 1);
console.log("Average Change = " + average);


//Greatest Increase section

//To find the max changes in entire period, first, we should consider the changes between the first 2 rows ([1][1] - [0][1]) as a default maximum (to compare between maximum and other every 2 month) then, we should find the differences profit/losses between every 2 month(ex: feb-jan or row1 - row0) and it should start from next 2 month because the first 2 month by default considered as a maximum.  
var maximum = finances[1][1]-finances[0][1];
var difference = 0;
var date_of_maximum = "";


for (var index = 1; index < finances.length - 1; index++) {
difference = finances[index+1][1]-finances[index][1];

  if (maximum < difference) {
    maximum = difference;
    date_of_maximum= finances[index+1][0];
    
  }
}

console.log("Greatest Increase in profit/losses: " +date_of_maximum, "($" +maximum +")");


//Greatest Decrease
var minimum = finances[1][1]-finances[0][1];
difference = 0;
var date_of_minimum = "";


for (var index = 1; index < finances.length - 1; index++) {
difference = finances[index+1][1]-finances[index][1];

  if (minimum > difference) {
    minimum = difference;
    date_of_minimum = finances[index+1][0];
    
  }
}
console.log("Greatest Decrease in profit/losses: " +date_of_minimum, "($" +minimum +")");












  

