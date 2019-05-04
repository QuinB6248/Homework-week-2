function groupAdultsByAgeRange (arrayOfObjects) {
    if (arrayOfObjects.length === 0) {
        return {}
    }
    return arrayOfObjects.filter(person => person.age >= 18 && typeof person.age == 'number' && typeof person.name == 'string')
            .reduce((ageGroup, person)=>{
                if (person.age <= 20) {
                    if(ageGroup.hasOwnProperty('20 and younger') === false) {
                       ageGroup['20 and younger'] = []
                    }
                    ageGroup['20 and younger'].push(person)
                }
                if (person.age > 20 && person.age < 31 ) {
                    if(ageGroup.hasOwnProperty('21-30') === false) {
                        ageGroup['21-30'] = []
                     }
                    ageGroup['21-30'].push(person)
                }
                if (person.age > 30 && person.age < 41 ) {
                    if(ageGroup.hasOwnProperty('31-40') === false) {
                        ageGroup['31-40'] = []
                     }
                    ageGroup['31-40'].push(person)
                }
                if (person.age > 40 && person.age < 51 ) {
                    if(ageGroup.hasOwnProperty('41-50') === false) {
                        ageGroup['41-50'] = []
                     }
                    ageGroup['41-50'].push(person)
                }
                if (person.age > 50) {
                    if(ageGroup.hasOwnProperty('51 and older') === false) {
                        ageGroup['51 and older'] = []
                     }
                    ageGroup['51 and older'].push(person)
                }
               return ageGroup
             },{})
           
        }


console.log(groupAdultsByAgeRange([
    { name: "pete", age: 10 },
    { name: "dove", age: 17 },
    { name: "dave", age: 18 },
    { name: "hall", age: 19 },
    { name: "donn", age: 20 },
    { name: "trey", age: 21 },
    { name: "hann", age: 29 },
    { name: "chew", age: 30 },
    { name: "cloe", age: 31 },
    { name: "dart", age: 39 },
    { name: "this", age: 40 },
    { name: "dame", age: 41 },
    { name: "henk", age: 49 },
    { name: "anna", age: 50 },
    { name: "olga", age: 51 },
    { name: "bert", age: 52 },
    { name: "oldd", age: 120 },
  ]))

 