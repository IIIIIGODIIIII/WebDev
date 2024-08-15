const calculateAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = calculateAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentPersonAge = calculateAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        return oldestAge < currentPersonAge ? currentPerson : oldest;
    });
}

// Do not edit below this line
module.exports = findTheOldest;