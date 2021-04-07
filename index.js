// Code your solution here
function findMatching(driverNames, searchName) {
    return driverNames.filter(function(currentName) {
        return currentName.toLowerCase() === searchName.toLowerCase()
    })
}

function fuzzyMatch(driverNames, searchNamePartial) {
    return driverNames.filter(function(currentName) {
        return currentName[0].toLowerCase() === searchNamePartial[0].toLowerCase()
    })
}

function matchName(driverInfo, searchNameObj) {
    return driverInfo.filter(function(currentDriver) {
        return currentDriver.name === searchNameObj
    })
}