import './App.css';
import Footer from './Footer';
import Head from './Head.js';


// Example of a data array that
// you might receive from an API
const data = [
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
{ S_No: "Anom", Year: 19, Thematic_Area: "Male", Partner: "unknown", Project: "unknown" },
]

function Project() {
return (
    <>
	<Head />
    <h1 className="min" style={{fontSize:"28px", backgroundColor:"#ffa500ba", marginTop: "2%",marginLeft:"13%", marginRight: "13%"}}>Our PROJECTS</h1>
	<div className="tab">
    <div className="ta" style={{marginTop: "2%" }}>
	<table>
		<tr>
		<th>S_No</th>
		<th>Year</th>
		<th>Thematic Area</th>
        <th>Partner</th>
		<th>Project</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.S_No}</td>
			<td>{val.Year}</td>
			<td>{val.Thematic_Area}</td>
            <td>{val.Partner}</td>
			<td>{val.Project}</td>
			</tr>
		)
		})}
	</table>
	</div>
    </div>
	<Footer/>
    </>
);
}

export default Project;
