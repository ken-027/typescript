const fibonacci10Terms = (): number[] => {
	const seriesResult: number[] = [0, 1]

	for (let index = 2; index <= 9; index++) {
		seriesResult[index] = seriesResult[index - 1] + seriesResult[index - 2]
	}

	return seriesResult
}

console.log(fibonacci10Terms())
