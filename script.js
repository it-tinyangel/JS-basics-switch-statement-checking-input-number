let season = prompt("Enter number:"); // The user enters a number in the query box

// The switch structure checks the value of the season variable
switch (season) {
	case "12":
	case "1":
	case "2":
		alert("Winter"); // if number "12", "1" or "2" is entered, a write message "Winter"
		break;

	case "3":
	case "4":
	case "5":
		alert("Spring"); // if "3", "4" or "5" is entered, then write message "Spring"
		break;

	case "6":
	case "7":
	case "8":
		alert("Summer"); // if entered number "6", "7" or "8", then write a message "Summer"
		break;

	case "9":
	case "10":
	case "11":
		alert("Autumn"); // if entered number "9", "10" or "11", then write a message "Autumn"
		break;

	default:
		alert("Impossible. Enter number from 1 to 12"); // if the entered number does not match any of the cases
		break;
}