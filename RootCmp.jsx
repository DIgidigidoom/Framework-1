const { useState,useRef } = React

import { AnimalList } from './cmps/AnimalList.jsx'
import { getAnimalInfos } from './services/animal.list.service.js'

import { SeasonClock } from './cmps/SeasonClock.jsx'
import { CountDown } from './cmps/CountDown.jsx'
import { animateCSS } from './services/util.service.js'

export function RootCmp() {
    const [route, setRoute] = useState('CountDown')
    const elcounter = useRef()
  
    return (
      <section className="app">
        <header>
          <h1>My App</h1>
          <nav>
            <a onClick={() => setRoute('AnimalList')} href="#">Animal List</a>
            <a onClick={() => setRoute('SeasonClock')} href="#">Seasons Clock</a>
            <a onClick={() => setRoute('CountDown')} href="#">CountDown</a>
          </nav>
        </header>
  
        <main>
          {route === 'AnimalList' && <AnimalList animalInfos={getAnimalInfos()} />}
          {route === 'SeasonClock' && <SeasonClock />}
          {route === 'CountDown' && (
            <CountDown startFrom={10} counterRef={elcounter} onDone={() => {
                animateCSS(elcounter.current)
                console.log('Done!')
              }}
              
            />
          )}
        </main>
      </section>
    )
  }
  