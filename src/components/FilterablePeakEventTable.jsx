export function PeakEventChooser(){

    return (
        <>
         <div>
                <label htmlFor="Events">Choose an Event Type </label>

                <select name="Events" id="Events">
                <option value="emergency">Emergency</option>
                <option value="power">Power</option>
                <option value="nopower">No Power</option>
                <option value="fullpower">FullPower</option>
                </select>
            </div>
        </>
    );
}

export function PeakEventsearch(){

    return (
        <>
          <div>
                <label htmlFor="lname">Search:</label>
                <input type="text" id="lname" name="lname"></input>
                <br/><br/>
            </div>
        </>
    );
}

export function FilterPeakEventBar(){

    return (
        <>
        <div>
            <PeakEventChooser/>
            <PeakEventsearch/>
        </div>
    </>);
}

export function PeakEventTable(){

    const products = [
        { number: 'Cabbage1', link: 'Garlic1', title: 'Apple1', description: 'Test Description', id: 1 },
        { number: 'Cabbage2', link: 'Garlic2', title: 'Apple2', description: 'Test Description2', id: 2 },
        { number: 'Cabbage3', link: 'Garlic3', title: 'Apple3', description: 'Test Description3', id: 3 },
        { number: 'Cabbage4', link: 'Garlic4', title: 'Apple4', description: 'Test Description4', id: 4 },
      ];

      const listEvents = products.map(product =>
        <tr key={product.id}><td>{product.number}</td><td>{product.link}</td><td>{product.title}</td><td>{product.description}</td></tr>
      );

    return (<>
        <h1>Event1 Table</h1>
        <table>
            <PeakEventTableHeader/>
            <tbody>
                {listEvents}
            </tbody>
        </table>
    </>);
}

export function PeakEventTableHeader(){
    return (
    <>
        <caption>Peak Event Table</caption>
        <thead>
            <tr>
                <th scope="col">Number</th>
                <th scope="col">Link</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
            </tr>
        </thead>
    </>
    );
}

export function PeakEventTableRow(){
    return (<h2>Event Table Row</h2>);
}

export default function FilterablePeakEventTable() {
    return  (
        <>
        <FilterPeakEventBar/>
        <PeakEventTable/>
        </>
    );
    
}
