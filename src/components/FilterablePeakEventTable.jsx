export function FilterPeakEventBar(){

    return (
        <>
        <div>
            <div>
                <label for="Events">Choose an Event Type </label>

                <select name="Events" id="Events">
                <option value="emergency">Emergency</option>
                <option value="power">Power</option>
                <option value="nopower">No Power</option>
                <option value="fullpower">FullPower</option>
                </select>
            </div>
            <div>
                <label for="lname">Search:</label>
                <input type="text" id="lname" name="lname"></input>
                <br/><br/>
            </div>
        </div>
    </>);
}

export function PeakEventTable(){
    return (<>
        <h1>Event Table</h1>
        <table>
        <caption>Peak Event Table</caption>
            <thead>
                <th scope="col">Number</th>
                <th scope="col">Link</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
            </thead>
            <tr>
                <td>1</td>
                <td>a link</td>
                <td>a Title is here</td>
                <td>This is a description</td>
            </tr>
            <tr>
                <td>2</td>
                <td>a link</td>
                <td>a Title is here</td>
                <td>This is a description</td>
            </tr>
            <tr>
                <td>3</td>
                <td>a link</td>
                <td>a Title is here</td>
                <td>This is a description</td>
            </tr>
        </table>
    </>);
}

export function PeakEventTableHeader(){
    return (<h2>Event Table Header</h2>);
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
