const regularString = "C is for cookie, that's good enough for me"
const leetMap = {
	4: ["a", "A"],
	3: ["e", "A"],
	1: ["i", "I"],
	0: ["o", "O"],
	5: ["s", "S", "b", "D"],
	7: ["t", "T"],
}

const getLeetString = (string) => {
	let allValuesArray = Object.values(leetMap).reduce((
	  accumulator,
	  currentValue
	) => (accumulator.concat(currentValue)))

	let convertedString = string
	string.split("").forEach((letter) => {
		// Check if all this letter needs to be L33Tified
		if (allValuesArray.includes(letter)) {
			const modifiedString = convertedString.replace(letter, () => {
				return Object.keys(leetMap).find(key => leetMap[key].includes(letter))
			})		
			convertedString = modifiedString
		}
	})

	console.log(convertedString)
}

module.exports = getLeetString(regularString)