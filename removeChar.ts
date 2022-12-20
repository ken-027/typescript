const removeChar = (str: string): number => {
	const numbers: number[] = []

	for (let index = 0; index < str.length; index++) {
		const num: number = parseInt(str[index])
		if (str[index].trim() === '' || isNaN(num)) continue

		numbers.push(num)
	}
	return parseInt(numbers.join(''))
}

console.log(removeChar('I am 25 years and 10 months old'))
