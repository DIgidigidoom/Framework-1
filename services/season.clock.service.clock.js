export const seasonClockService = {
	getCurrentTimeFormated,
	getMonth,
	getDay,
    getCurrentSeason,
}


export function getCurrentTimeFormated() {
    const now = new Date()

    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')

    const timeString = `${hours}:${minutes}:${seconds}`
    return timeString
}

function getMonth() {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currentDate = new Date()
    const currentMonthName = monthNames[currentDate.getMonth()]
    return currentMonthName
}
function getDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const today = new Date()
    const dayName = days[today.getDay()]
    return dayName
}

function getCurrentSeason() {
    const month = new Date().getMonth()
  
    if (month >= 2 && month <= 4) return 'Spring'
    if (month >= 5 && month <= 7) return 'Summer'
    if (month >= 8 && month <= 10) return 'Fall'
    return 'Winter'
  }
