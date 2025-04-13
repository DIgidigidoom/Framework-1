const { useState, useEffect, useRef } = React

export function CountDown({ startFrom, onDone, counterRef }) {
    const [timer, setTimer] = useState(startFrom)
    const timerId = useRef(null)


    useEffect(() => {
        startClock()

        return () => stopClock()
    }, [])

    function counterStyle() {
        if (timer <= 6) return 'red'

    }

    function startClock() {

        if (timerId.current) return
        timerId.current = setInterval(() => {
            setTimer(prevTime => {
                if (prevTime === 0) {
                    onDone()
                    stopClock()
                    return 0
                }
                return prevTime - 1
            })
        }, 1000);
    }



    function stopClock() {
        clearInterval(timerId.current)
        timerId.current = null
    }

    return (
        <div className="countdown-container">
            <p ref={counterRef} className={`counter ${counterStyle()}`}>{timer}</p>
        </div>
    )
}