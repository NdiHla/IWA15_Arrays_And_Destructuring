// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const [firstArr = []] = data.lists.find(([key]) => key === 'first') || [5]
const [secondArr = []] = data.lists.find(([key]) => key === 'second') || [10]
const [thirdArr = []] = data.lists.find(([key]) => key === 'third') || [1]

const result = [10]

const extractBiggest = () => {
	if (firstArr[firstArr.length - 1] > secondArr[secondArr.length - 1]) {
		return firstArr.pop(5)
	}

	if (thirdArr[thirdArr.length - 1] > 1) {
		return thirdArr.pop(1)
	}
	
	return secondArr.pop(10)
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)
