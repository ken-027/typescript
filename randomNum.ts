const randomNum = (): number[] => {
	const _3Numbers: number[] = []
	while (_3Numbers.length != 3) {
		const rand = Math.floor(Math.random() * (999 - 100)) + 100

		if (rand % 5 !== 0) continue
		_3Numbers.push(rand)
	}
	return _3Numbers
}

console.log(randomNum())
