var userAges = [15, 25, 35, 45]
var subscriptionStatus = [true, false, true, false];



for(var index = 0; index < userAges.length; index++) {
    var userAge = userAges[index];
    var is_subscribed = subscriptionStatus[index];

    if (userAge < 18 && is_subscribed) {
        console.log( "The user is younger than 18 and is not subscribed");
    }
    
    else if (userAge >= 18 && is_subscribed) {
        console.log("The user is 18 and older and not subscribed");
    }
    
    else if (userAge < 18 && is_subscribed) {
        console.log("The user is younger than 18 and is subscribed");
    }
    else {
        console.log("The user is 18 and older and is subscribed");
    }

}




