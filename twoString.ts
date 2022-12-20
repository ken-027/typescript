const twoString = (s1: string, s2: string): string => {
	const s1firstChar = s1[0]
	const s2firstChar = s2[0]
	const s1middleChar = s1[Math.floor(s1.length / 2)]
	const s2middleChar = s2[Math.floor(s2.length / 2)]
	const s1lastChar = s1[s1.length - 1]
	const s2lastChar = s2[s2.length - 1]

	return `${s1firstChar}${s2firstChar}${s1middleChar}${s2middleChar}${s1lastChar}${s2lastChar}`
}

console.log(twoString('America', 'Japan'))
