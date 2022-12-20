const generatePrime = (num: number): number[] => {
	const resultPrime: number[] = []
	var indexPrint: number = 1

	for (let sequence = 2; indexPrint <= num; sequence++) {
		for (var nestedSequence = 2; nestedSequence < sequence; nestedSequence++) {
			if (sequence % nestedSequence == 0) break
		}
		if (sequence == nestedSequence) {
			resultPrime.push(sequence)
			indexPrint++
		}
	}
	return resultPrime
}

console.log(generatePrime(9))
