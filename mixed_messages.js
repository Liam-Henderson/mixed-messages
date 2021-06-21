const morningActivitys = ['Read Newspaper', 'Strech', 'Code', 'Watch a short Video', 'Go for a Walk', 'Go for a run', 'Do some strengh training', 'clean up', 'listen to music', 'write a letter to a freind']

const breakfestFoods = ['Eggs', 'toast', 'Frenchtoast', 'Orange', 'Bacon', 'Sausage', 'Strawberrys', 'Sweet Potato Hash', 'Potato Hash', 'Cerieal', 'Pancakes']

const breakfestDrinks =['Apple juice', 'Coffee', 'Tea', 'Water', 'Oranage Juice', 'Milk', 'Ice tea']

const timeIntervils =[15, 30, 45, 60, 75, 90]

const getRandom = (list) => {
    let index = Math.floor(Math.random() * list.length)
    return(list[index])
}

const getSchedule = () =>{
    let schedule = []
    count = 0
    while(count > 90){
        let time = getRandom(timeIntervils)
        if(count + time <= 90){
            count += time
            schedule.push(time)
        }
    }
    return schedule
}

const getMorningRoutine = () => {
    const schedule = getSchedule()
    const todaysActivitys = schedule.map(time => {
        let activity = getRandom(morningActivitys)
        return `${activity} for ${time} minutes.`
    }
    )
    return todaysActivitys
}

const get activityList = () => {
    const morningRoutine = getMorningRoutine()
    routineString = ''
    morningRoutine.forEach(activity => {
        routineString += `-${activity}
        `
    })
    return routineString
}
const getBreakfest = () => {
    const foodOne = getRandom(breakfestFoods)
    const foodTwo = getRandom(breakfestFoods)
    const drink = getRandom(breakfestDrinks)
    return `For Breakfest this morning I recommend ${foodOne} and ${foodTwo} with a cup of ${drink}.`

}

const getMorningPlan = () => {
    const breakfest = getBreakfest()
    const activitys = activityList()
    morningMessage = `Good Morning!
    Start your day off right with this randomized morning schedule! 
    Begin for brushing your teeth & enjoying some food. ${breakfest}
    After your all done you should start your day off with:
    ${activitys}
    Have a Great Day! See you tommorw.
    `
}
