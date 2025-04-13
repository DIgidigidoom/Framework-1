

import { makeId } from "../services/util.service.js"

export function AnimalList({ animalInfos }) {
    console.log(animalInfos)
    return (
        <div>
            <h1 className='animals-jeader'>Animal List</h1>
           <table className="animals-table">
            <thead>
                <tr>
                    <th>Animal</th>
                    <th>Count</th>
                    <th>Search</th>
                </tr>
            </thead>
            <tbody>
                {animalInfos.map(animal=>
                    <tr key={makeId(5)}>
                        <td>{animal.type}</td>
                        <td>{animal.count}</td>
                        <td><a href={`//www.google.com/search?q=${animal.type}`}>Search..</a></td>
                    </tr>
                )}
            </tbody>
           </table>
        </div>
    )
}