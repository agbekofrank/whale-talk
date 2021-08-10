let input = 'The city guard'
const vowels = ['e', 'i','o','u','a']
let resultArray = []
for(let i = 0; i < input.length; i++){
  for(let j = 0; j < vowels.length; j++){
    if(input[i] === vowels[j]){
      if(input[i] === 'u'){
        resultArray.push('u');
      }else if(input[i] === 'e'){
        resultArray.push('e');
      }
      resultArray.push(input[i])
    }
  }  
}
console.log(resultArray.join('').toUpperCase())
console.log(resultArray)