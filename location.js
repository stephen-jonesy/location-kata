
function location(arr) {
    newArr = [...arr];
    
    return newArr.map((person) => {
        if(person.location === undefined) {
            return {...person, location: 'remote'}
        }
        return {...person}
    })

}

module.exports = {location}