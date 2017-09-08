/**
@param tutorDates
@param allHours
@param tutorRates
@param allSpecialRate
@param month
@param year
@customFunction
*/
function INCOME(allDates,allHours,tutorRate,allSpecialRates,month,year) {
  var total = 0;
  //use the number of rates to loop through each list and create list for tutor
  for(var i = 0; i <tutorRate.length; i++) {
    var tutorDates= [];
    for(var x = 0; x < allDates.length; x++) {
      tutorDates.push(allDates[x][i]);
    }
    var tutorSpecialRates= [];
    for(var z = 0; z < allSpecialRates.length; z++) {
      tutorSpecialRates.push(allSpecialRates[z][i]);
    }
    var tutorHours= [];
    for(var y = 0; y < allHours.length; y++) {
      tutorHours.push(allHours[y][i]);
    }
    //add the income for tutor to total for month
    total += TUTORINCOME(tutorDates,tutorHours,tutorRate[i],tutorSpecialRates,month,year);
  }
  //return total amt USD earned from customers
  return total;
}


function PAIDOUT(allDates,allHours,tutorRate,tutorPercentage,allSpecialRates,allSpecialPercentages,month,year) {
  var total = 0;
  //use the number of rates to loop through each list and create list for tutor
  for(var i = 0; i <tutorRate.length; i++) {
    var tutorDates= [];
    for(var x = 0; x < allDates.length; x++) {
      tutorDates.push(allDates[x][i]);
    }
    var tutorSpecialRates= [];
    for(var z = 0; z < allSpecialRates.length; z++) {
      tutorSpecialRates.push(allSpecialRates[z][i]);
    }
    var tutorSpecialPercentages= [];
    for(var w = 0; w < allSpecialPercentages.length; w++) {
      tutorSpecialPercentages.push(allSpecialPercentages[w][i]);
    }
    var tutorHours= [];
    for(var y = 0; y < allHours.length; y++) {
      tutorHours.push(allHours[y][i]);
    }
    //add the amount paid to tutor for month
    total += TUTORPAY(tutorDates,tutorHours,tutorRate[i],tutorPercentage[i],tutorSpecialRates,tutorSpecialPercentages,month,year);
  }
  //return total amt USD earned paid to tutors
  return total;
}

function TUTORINCOME(dates,hours,rate,specialRates,month,year) {
  var total = 0;
  //loop through each day tutor has tutored
  for(var j = 0; j < dates.length; j++) {
    //check if the date is in specified month and year
    var date = new Date(dates[j]);
    if(date.getMonth() == month-1 && date.getFullYear() == year) {
      //if this lesson has a special rate use that rate
      if(specialRates[j]!="") {
        total+=hours[j]*specialRates[j];
      } else {
        //if no special rate use default rate for tutor
        total+=hours[j]*rate;
      }
    }
  }
  //not sure if this next statment is nessesary
  if(total==undefined) {
    return 0;
  }
  //return the total amt USD Earned from customers
  return total;
}

function TUTORPAY(dates,hours,rate,percentage,specialRates,specialPercentages,month,year) {
  var total = 0;
  //loop through each day tutor has tutored
  for(var j = 0; j < dates.length; j++) {
    //check if the date is in specified month and year
    var date = new Date(dates[j]);
    if(date.getMonth() == month-1 && date.getFullYear() == year) {
      //if this lesson has a special rate use that rate
      var lessonPay;
      if(specialRates[j]!="") {
        lessonPay=hours[j]*specialRates[j];
      } else {
        //if no special rate use default rate for tutor
        lessonPay=hours[j]*rate;
      }
      if(specialPercentages[j]!="") {
        total+=lessonPay*(1-specialPercentages[j]);
      } else {
        //if no special rate use default rate for tutor
        total+=lessonPay*(1-percentage);
      }
    }
  }
  //not sure if this next statment is nessesary
  if(total==undefined) {
    return 0;
  }
  //return the total amt USD Earned from customers
  return total;
}

function TOTALTUTORPAY(dates,hours,rate,percentage,specialRates,specialPercentages) {
  var total = 0;
  //loop through each day tutor has tutored
  for(var j = 0; j < dates.length; j++) {
    //if this lesson has a special rate use that rate
    var lessonPay;
    if(specialRates[j]!="") {
    lessonPay=hours[j]*specialRates[j];
  } else {
    //if no special rate use default rate for tutor
    lessonPay=hours[j]*rate;
  }
    if(specialPercentages[j]!="") {
      total+=lessonPay*(1-specialPercentages[j]);
    } else {
      //if no special rate use default rate for tutor
      total+=lessonPay*(1-percentage);
    }
  }
  //not sure if this next statment is nessesary
  if(total==undefined) {
    return 0;
  }
  //return the total amt USD Earned from customers
  return total;
}

function TOTALTUTORINCOME(dates,hours,rate,specialRates) {
  var total = 0;
  //loop through each day tutor has tutored
  for(var j = 0; j < dates.length; j++) {
    //if this lesson has a special rate use that rate
    if(specialRates[j]!="") {
      total+=hours[j]*specialRates[j];
    } else {
      //if no special rate use default rate for tutor
      total+=hours[j]*rate;
    }
  }
  //not sure if this next statment is nessesary
  if(total==undefined) {
    return 0;
  }
  //return the total amt USD Earned from customers
  return total;
}

function AMOUNTOWED(name, hours, clients,rates,defaultRate) {
  var total =0;
  for(var i = 0; i < hours.length; i++ ) {
    if(clients[i]==name) {
      if(rates[i]=="") {
        total+=hours[i]*defaultRate;
      } else {
        total+= hours[i]*rates[i];
      }
    }
  }
  return total;
}
