// generate an html header

function headGen(title, type) {
	return `<h${type}> ${title} </h${type}>`
}
console.log(headGen('hello', 1))

