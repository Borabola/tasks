export const calculateRentalCost = (days) => {
	if (!days) {
		return;
	}
    const price = 40;
    switch (true) {
		case days >= 7:  
            return days * price - 50;
		case days >= 3:
            return days * price - 20;
		default: 
			return days * price;
	}
};
console.log('calculateRentalCost');
console.log(calculateRentalCost(2));
console.log(calculateRentalCost(3));
console.log(calculateRentalCost(7));

export const openOrSenior = (teachers) => {
	if (!Array.isArray(teachers)) {
		return;
	}
	let levelList = []
	teachers.map((teacher) => {
		if (teacher.length < 2) {
			levelList.push('Not enough information')
		}
		const [age, experience] = teacher;
		if (age >= 40 && experience > 15 ) {
			levelList.push('Senior')
		} else {
			levelList.push('Open')
		}
	})
	return levelList;
}
console.log('openOrSenior');
console.log(openOrSenior([[31, 10],[55, 23],[20, 0],[41, 16]]))
console.log(openOrSenior([[34, 11],[55,7],[39, 16],[38, 14]]))
console.log(openOrSenior([[40, 15],[40, 5],[40, 20],[41, 15], [41, 5], [41, 16], [5, 15], [5, 5], [5,20]]))
console.log(openOrSenior([[40, 15],[40],[40, 20],[41, 15], [41, 5], [41, 16], [5, 15], [5, 5], [5,20]]))
console.log(openOrSenior([[40, 15],[40],[, 20]]))

export const isPrime = (number) => {
	const checkPrime = (nr, limit) => {
	  for (let start = 3; start <= limit; start += 2) {
		if (0 === nr % start) {
		  return false;
		}
	  }
	  return nr > 1;
	};
  
	return number === 2 || number % 2 !== 0 && checkPrime(number, Math.sqrt(number));
  }

console.log('isPrime');
console.log(isPrime(2));
console.log(isPrime(73));
console.log(isPrime(1));
console.log(isPrime(75));
console.log(isPrime(-1));

export const moveZeros = (arr) => {
	if (!Array.isArray(arr)) {
		return;
	}
	const zerolessArr = arr.filter(item => item !== 0)
	const zeroNumber = arr.length - zerolessArr.length
	if (zeroNumber > 0) {
		const zeroArr = new Array(zeroNumber).fill(0);
		
		return zerolessArr.concat(zeroArr);
	}
	return arr;
}
console.log('moveZeros');
console.log(moveZeros([false,1,0,1,2,0,1,3,'a']))
console.log(moveZeros(['test',0,5,'0',2,0,'a']))

export const reverseWords = (str ) => {
	if (typeof str !== 'string') {
		return;
	}
	return str.split(' ').map((word)=> { 
        return word.split('').reverse().join(''); 
    }).join(' ');
}
console.log('reverseWords');
console.log(reverseWords('double  spaces'));
console.log(reverseWords('The quick lazy dog.'));

export const createUrl = (template, params) => {
	const UNDEFINED = 'undefined';
	const regex = /{(\w+)}/g;
    let resultUrl = template.toString();

    resultUrl = Object.keys(params).reduce((resultUrl, key) => {
		let paramKey = `{${key}}`
        let replaceText = params[key].toString();
        resultUrl = resultUrl.replace(paramKey, replaceText) 
		return resultUrl;
	}, resultUrl)
    resultUrl =  resultUrl.replace( regex, UNDEFINED);
    return resultUrl;
}

console.log(createUrl('/api/{list}/{id}', {list: 'items', id: 0}))
console.log(createUrl('/api/{id}', {name: 'Petya'}) )
console.log(createUrl('/api/{id}', {id: 0}))

export const invertColor = (hex) =>{
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16);
    const g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16);
    const b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);

	const checkColorLenght = (str) => {
		if (typeof str !== 'string') {
			return;
		}
		return str.length < 2 ? `0${str}` : str
	}
    return `#${checkColorLenght(r)}${checkColorLenght(g)}${checkColorLenght(b)}`;
}
console.log(invertColor('#012345'))
console.log(invertColor('#fedcba'))
console.log(invertColor('#DDEEAA'))

const deleteOjectProp = (object, array) => {
	if (!Array.isArray(array)) {
		throw new Error('removeProperties: Invalid properties format.');
	}
	array.forEach(property =>
		delete object[property]
		)
	return object;		
}
const checkTranformation = ( state, transform) => {
	switch (transform['operation']) {
		case 'addProperties':
			return {...state, ...transform['properties']};
		case 'removeProperties':
			return deleteOjectProp (state, transform['properties']);
		case 'clear':
			return {};
		default:
			throw new Error(`Operation name ${transform['operation']} is unknown`);
}
}

export  const transformState = (state, transforms) => {
	  let currentState = state;
	 if (!Array.isArray(transforms)) {
		 return;
	 }

	 transforms.forEach(transform => {
		currentState = checkTranformation(currentState, transform)
	 }) 
	 return currentState;
}

console.log(transformState(
{foo: 'bar', name: 'Jim', another: 'one'},
[
	{operation: 'addProperties', properties: {yet: 'another property'}}, 
	{operation: 'clear'},
	{operation: 'addProperties', properties: {foo: 'bar', name: 'Jim'}}
]
) 
)
  