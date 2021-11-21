function getCostumerAge() {
	return prompt("How old are you?");
}

function getStartingStation() {
	return Number(
		prompt(`From which station are you travelling? Type:
		1 for Prishtina
		2 for Prizren
		3 for Mitrovica
		4 for Peja`)
	);
}

function getEndingStation() {
	return Number(
		prompt(`What is the destination station you want to travel to? Type:
		1 for Prishtina
		2 for Prizren
		3 for Mitrovica
		4 for Peja`)
	);
}

function calculateDistance(startingStation, destinationStation) {
	const prToPz = 87;
	const prtoMi = 43;
	const prToPe = 100;
	const pzToMi = 105;
	const pzToPe = 75;
	const miToPe = 70;
	if ((startingStation === 1 && destinationStation === 2) || (startingStation === 2 && destinationStation === 1)) {
		return prToPz;
	} else if ((startingStation === 1 && destinationStation === 3) || (startingStation === 3 && destinationStation === 1)) {
		return prtoMi;
	} else if ((startingStation === 1 && destinationStation === 4) || (startingStation === 4 && destinationStation === 1)) {
		return prToPe;
	} else if ((startingStation === 2 && destinationStation === 3) || (startingStation === 3 && destinationStation === 2)) {
		return pzToMi;
	} else if ((startingStation === 2 && destinationStation === 4) || (startingStation === 2 && destinationStation === 4)) {
		return pzToPe;
	} else if ((startingStation === 3 && destinationStation === 4) || (startingStation === 4 && destinationStation === 3)) {
		return miToPe;
	} else {
		return 0;
	}
}

function isAJunior(costumerAge) {
	return costumerAge <= 18;
}
function isASenior(costumerAge) {
	return costumerAge >= 65;
}

function calculateTicketPrice(costumerAge, distance) {
	const pricePerKilometer = 0.21;
	let ticketPrice = distance * pricePerKilometer;
	if (isAJunior(costumerAge)) {
		ticketPrice = ticketPrice * 0.8;
	} else if (isASenior(costumerAge)) {
		ticketPrice = ticketPrice * 0.6;
	}
	return ticketPrice;
}

const costumerAge = getCostumerAge();
const startingStation = getStartingStation();
const destinationStation = getEndingStation();
const distanceToTravel = calculateDistance(startingStation, destinationStation);
let ticketPrice = calculateTicketPrice(costumerAge, distanceToTravel);

if (ticketPrice > 0) {
	alert(`Your ticket price is £${ticketPrice.toFixed(2)}`);
} else {
	alert("Oops you typed something wrong. Please reload the page and try again");
}
