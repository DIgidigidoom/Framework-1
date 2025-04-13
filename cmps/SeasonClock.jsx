const { useState, useEffect, useRef } = React
 
import {seasonClockService} from "../services/season.clock.service.clock.js"

export function SeasonClock() {
    const [isDark, setIsDark] = useState(false)
    const [month, setMonth] = useState(seasonClockService.getMonth())
    const [season, setSeason] = useState(seasonClockService.getCurrentSeason())
    const [day, setDay] = useState(seasonClockService.getDay())
    const [time, setTime] = useState(seasonClockService.getCurrentTimeFormated())
    const timerId = useRef(null)

    useEffect(() => {
        startClock()

        return () => stopClock()
    })

    function startClock() {
        if (timerId.current) return
        timerId.current = setInterval(() => {
            setTime(updatedTime => updatedTime = seasonClockService.getCurrentTimeFormated())
            setMonth(updatedMonth => updatedMonth = seasonClockService.getMonth())
            setSeason(updatedSeason => updatedSeason = seasonClockService.getCurrentSeason())
            setDay(updatedDay => updatedDay = seasonClockService.getDay())
            
        }, 1000);
    }


    function stopClock() {
        clearInterval(timerId.current)
        timerId.current = null
    }

    function ToggleDarkMode() {
        setIsDark(preIsDark => !preIsDark)
    }

    function bgc() {
        return isDark ? 'dark' : ''
    }

    return (
        <div className={`season-clock-container ${bgc()}`} onClick={ToggleDarkMode}>
            <p className="month">{month} <span className="season">({season})</span></p>
            <img className="season-img" src={`images/${season}.png`} alt="" />
            <p className="day-of-the-week">{day}</p>
            <p className="clock">{time}</p>
        </div>
    )
}