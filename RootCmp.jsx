const { useState } = React

import { AnimalList } from './cmps/AnimalList.jsx'
import { getAnimalInfos } from './services/animal.list.service.js'

import { SeasonClock } from './cmps/SeasonClock.jsx'


export function RootCmp() {
    const [route, setRoute] = useState('AnimalList')
    return <section className="app">
        <header>
            <h1>My App</h1>
            <nav>
                <a onClick={() => setRoute('AnimalList')} href="#">Animal List</a>
                <a onClick={() => setRoute('SeasonClock')} href="#">Seasons Clock</a>
              
            </nav>
        </header>

            <main>
                {route === 'AnimalList' && <AnimalList animalInfos={getAnimalInfos()} />}
                {route === 'SeasonClock' && <SeasonClock/>}
              
            </main>
    </section>
}