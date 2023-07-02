import './App.css';
import React from 'react';
import Head from './Head.js';
import Footer from './Footer';


const data = [
{ S_No: "1", Job: "HR", Requirements: "MBA", No_of_jobs: "1", Duration: "2 Months" },
{ S_No: "1", Job: "HR", Requirements: "MBA", No_of_jobs: "1", Duration: "2 Months" },
{ S_No: "1", Job: "HR", Requirements: "MBA", No_of_jobs: "1", Duration: "2 Months" },
{ S_No: "1", Job: "HR", Requirements: "MBA", No_of_jobs: "1", Duration: "2 Months" },
{ S_No: "1", Job: "HR", Requirements: "MBA", No_of_jobs: "1", Duration: "2 Months" },
{ S_No: "1", Job: "HR", Requirements: "MBA", No_of_jobs: "1", Duration: "2 Months" },
{ S_No: "1", Job: "HR", Requirements: "MBA", No_of_jobs: "1", Duration: "2 Months" },
{ S_No: "1", Job: "HR", Requirements: "MBA", No_of_jobs: "1", Duration: "2 Months" },
]

const Jobs = () => {
  return (
	<>
	<Head/>
    <div>
        <h1 className="min" style={{fontSize:"28px", backgroundColor:"#ffa500ba", marginTop: "2%",marginLeft:"18%", marginRight: "18%", textAlign:"center"}}>Our Jobs</h1>
        <h1 style={{textAlign:"center", fontSize:"28px", fontFamily:"Helvetica"}}>Paid Internship Opportunities</h1>
        <p style={{textAlign:"center", fontSize:"17px", marginLeft:"20%", marginRight: "20%", backgroundColor:"milky"}}>Good Thinkers Organization is a Non-Profit, Advocacy & Development NGO, working since 2001 in Punjab-Pakistan, with having special focus on Children, Women & Transgender Community. The organization is currently looking to hire Internees for its Lahore Office. Interested candidates, having required qualifications, may submit their C.V at jobs@gtopakistan.org before 2nd of March 2021. Detail is mentioned below</p>
        <div className = "ta">
        <table>
		<tr>
		<th>S_No</th>
		<th>Job Description</th>
		<th>qualifications</th>
        <th>No of jobs</th>
		<th>Duration</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.S_No}</td>
			<td>{val.Job}</td>
			<td>{val.Requirements}</td>
            <td>{val.No_of_jobs}</td>
			<td>{val.Duration}</td>
			</tr>
		)
		})}
	</table>
    </div>
    <p style={{textAlign:"center", fontSize:"17px",marginTop:"3%", marginLeft:"20%", marginRight: "20%", backgroundColor:"milky"}}>GTO provides equal opportunities to Men, Women & Transgenders. Applicants, having required qualification and expertise, may submit their C.Vs at jobs@gtopakistan.org before 2nd of March 2021. The GTO will pay the small amount of monthly stipend to the selected Internees.</p>

    </div>
	<Footer/>
	</>
  )
}

export default Jobs
