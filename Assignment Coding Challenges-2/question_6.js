function extractPersonInfo(person) {
    const {
      name,
      address: { street }
    } = person;
    
    return { name, street };
  }
//   Example usage of the function with a sample object:  
const person = {
    name: 'Joni',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    }
  };
  
  const { name, street } = extractPersonInfo(person);
  
  console.log(name); // 'Joni'
  console.log(street); // '123 Main St'
  