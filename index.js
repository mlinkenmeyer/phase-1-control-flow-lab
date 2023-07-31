function scuberGreetingForFeet(rideDistance) {
  let scuberGreetingForFeet;

  if (rideDistance <= 400) {
    scuberGreetingForFeet = "This one is on me!";
  } else if (rideDistance <= 2000) {
    scuberGreetingForFeet = "That will be twenty bucks.";
  } else if (rideDistance <= 2500) {
    scuberGreetingForFeet = "I will gladly take your thirty bucks.";
  } else {
    scuberGreetingForFeet = "No can do.";
  }

  return scuberGreetingForFeet;
}

function ternaryCheckCity(cityName) {
  let cityAccess = cityName === "NYC" ? "Ok, sounds good." : "No go.";

  return cityAccess;
}

function switchOnCharmFromTip(tipAmount) {
  let tipMessage;

  switch (tipAmount) {
    case "generous":
      tipMessage = "Thank you so much.";
      break;
    case "not as generous":
      tipMessage = "Thank you.";
      break;
    default:
      tipMessage = "Bye.";
      break;
  }

  return tipMessage;
}
