module.exports.groupAdultsByAgeRange =(arrayOfObjects) => {

    if (arrayOfObjects.length === 0) {
        return {}
    }   
    return arrayOfObjects.filter(person => person.age > 17 && typeof person.age == 'number' && typeof person.name == 'string' )
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





