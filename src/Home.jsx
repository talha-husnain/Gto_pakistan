import React from 'react'
import './App.css';
import Head from './Head.js';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';
import { Link } from 'react-router-dom'
import './response.css';


export const Home = () => {
  return (
    <div>
        <>
        <Head />

        <div className="intro">
  <span className="content-wrapper">
    <div className="carousel-wrapper">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-title">First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="carousel-title">Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="carousel-title">Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <div className="text-wrapper">
      <h1 className="text-title">Introduction</h1>
      <p className="text-description">
        Good Thinkers Organization(GTO) is an Advocacy & Development NGO striving
        to foster human development and uphold rights of underprivileged communities
        particularly women, children, transgender persons, PWDs and minorities in
        Pakistan through research based advocacy interventions, legislative and policy
        reforms since its Registration in 2003. The organization has very strong linkages
        with Government Departments in Pakistan and very strong networking with Ministers
        and Members of Legislative Assemblies. GTO is well experienced in legislative drafting,
        lobbying, advocacy and networking. It has signed MoU with Economic Affairs Division of
        Pakistan in Nov 2021. GTO is member of Trans-Rights Protection Network-Pakistan, Child
        Rights Movement-Punjab, Grow-Green Network-Pakistan, NGOs coordination Council.
      </p>
    </div>
  </span>
</div>

    <div className="box12">
      <span>
        <div className="box" style={{marginLeft: "4%"}}>
          <span>
        <h1 className= "min" style={{backgroundColor: "black", color: "white", fontSize: "30px"}}> Vision</h1>
        <p style={{marginLeft:"3%", marginRight:"3%"}}>A society where everyone enjoys equal access to justice and development opportunities A society where everyone enjoys equal access to justice and development opportunities</p>
        </span>
        
        <button type="button" class="btn btn-primary btn-sm" style={{marginBottom: "10px"}}><Link to="/Vision" style={{color: "white", textDecoration: 'none'}}>Learn More </Link></button>
        </div>
      </span>
      <span>
        <div className="box" style={{width: "33%", marginRight: "4%"}}>
          <span>
        <h1 className= "min" style={{backgroundColor: "black", color: "white", fontSize: "30px"}} > Mission</h1>
        <p style={{marginLeft:"5%", marginRight:"5%"}}>Strive to forge Rule of Law, good governance and protect rights of citizens particularly women, children, persons with disability, trans-community and religious minorities</p>
        </span>
        <button type="button" class="btn btn-primary btn-sm" style={{marginBottom: "10px"}}><Link to="/Mission" style={{color: "white", textDecoration: 'none'}}>Learn More </Link></button>

        </div>
        </span>
    </div>
    <h1 className= "min" style={{backgroundColor: "orange", color: "white", textAlign:"center"}}>Thematic Areas</h1>
    <div className="box12">
    <span>
        <div className="box" style={{borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", marginLeft: "5%"}}>
          <span>
        <h1 className= "min" style={{backgroundColor: "black", color: "white", fontSize: "25px"}}> Rules of Law</h1>
        <p className = "adj" style={{ textAlign:"center",marginLeft:"5%", marginRight:"5%"}}>A society where everyone enjoys equal access to justice and equal opportunities A society where everyone enjoys equal access to justice and development opportunities</p>
        </span>
        <button type="button" class="btn btn-primary btn-sm" style={{marginBottom: "10px"}}><Link to="/Rule" style={{color: "white", textDecoration: 'none'}}>Learn More </Link></button>

        </div>
      </span>
      <span>
        <div className="box" style={{borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px",marginRight: "5%"}}>
          <span>
        <h1 className= "min" style={{backgroundColor: "black", color: "white", fontSize: "25px"}}> Human Rights</h1>
        <p className = "adj" style={{ textAlign:"center",marginLeft:"3%", marginRight:"3%"}}>A society where everyone enjoys equal access to justice and development opportunities A society where everyone enjoys equal access to justice and development opportunities</p>
        </span>
        <button type="button" class="btn btn-primary btn-sm" style={{marginBottom: "10px"}}><Link to="/Right" style={{color: "white", textDecoration: 'none'}}>Learn More </Link></button>

        </div>
      </span>
      <span>
        <div className="box" style={{borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px",marginLeft: "5%"}}>
          <span>
        <h1 className= "min" style={{backgroundColor: "black", color: "white", fontSize: "25px"}}>Health </h1>
        <p className = "adj" style={{ textAlign:"center",marginLeft:"3%", marginRight:"3%"}}>A society where everyone enjoys equal access to justice and development opportunities A society where everyone enjoys equal access to justice and development opportunities</p>
        </span>
        <button type="button" class="btn btn-primary btn-sm" style={{marginBottom: "10px"}}><Link to="/Health" style={{color: "white", textDecoration: 'none'}}>Learn More </Link></button>

        </div>
      </span>
      <span>
        <div className="box" style={{borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px", marginRight: "5%"}}>
          <span>
        <h1 className= "min" style={{backgroundColor: " black", color: "white", fontSize: "25px"}}>Disaster Management</h1>
        <p className = "adj" style={{ textAlign:"center",marginLeft:"3%", marginRight:"3%"}}>A society where everyone enjoys equal access to justice and development opportunities A society where everyone enjoys equal access to justice and development opportunities</p>
        </span>
        <button type="button" class="btn btn-primary btn-sm" style={{marginBottom: "10px"}}><Link to="/Diasaster" style={{color: "white", textDecoration: 'none'}}>Learn More </Link></button>

        </div>
      </span>
    
      <span>
        <div className="box" style={{borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px",marginLeft: "5%"}}>
          <span>
        <h1 className= "min" style={{backgroundColor: "black", color: "white", fontSize: "25px"}}> Environment</h1>
        <p className = "adj" style={{ textAlign:"center",marginLeft:"3%", marginRight:"3%"}}>A society where everyone enjoys equal access to justice and development opportunities A society where everyone enjoys equal access to justice and development opportunities</p>
        </span>
        <button type="button" class="btn btn-primary btn-sm" style={{marginBottom: "10px"}}><Link to="/Envirn" style={{color: "white", textDecoration: 'none'}}>Learn More </Link></button>

        </div>
      </span>
      <span>
        <div className="box" style={{borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px",marginRight: "5%"}}>
          <span>
        <h1 className= "min" style={{backgroundColor: "black", color: "white", fontSize: "25px"}}> Women Rights</h1>
        <p className = "adj" style={{ textAlign:"center",marginLeft:"3%", marginRight:"3%"}}>A society where everyone enjoys equal access to justice and development opportunities A society where everyone enjoys equal access to justice and development opportunities</p>
        </span>
        <button type="button" class="btn btn-primary btn-sm" style={{marginBottom: "10px"}}><Link to="/Women" style={{color: "white", textDecoration: 'none'}}>Learn More </Link></button>

        </div>
      </span>
      <span>
        <div className="box" style={{borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px",marginLeft: "5%"}}>
          <span>
        <h1 className= "min" style={{backgroundColor: "black", color: "white", fontSize: "25px"}}> Education</h1>
        <p className = "adj" style={{ textAlign:"center",marginLeft:"3%", marginRight:"3%"}}>A society where everyone enjoys equal access to justice and development opportunities A society where everyone enjoys equal access to justice and development opportunities</p>
        </span>
        <button type="button" class="btn btn-primary btn-sm" style={{marginBottom: "10px"}}><Link to="/Education" style={{color: "white", textDecoration: 'none'}}>Learn More </Link></button>

        </div>
      </span>
    </div>
    <h1 className= "min" style={{textAlign:"center"}}> Our Partners in Development</h1>
<div className="par"  style={{alignItems:"center"}}>
<div className="carousel-wrapper1">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-title">First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="carousel-title">Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="carousel-title">Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
       </div>
    <h1 className= "min" style={{textAlign:"center"}}>Stakeholders' Review</h1>
    <div div className= "per" style={{alignItems: 'center', alignSelf: 'center', alignContent:'center'}}>
      
      <div className= "inn" style= {{  marginTop: "4%",marginBottom: "4%" }}>
        <span>
        <p className= "des">Being Government Officer in Social Welfare Department, I participated in GTO activities, they are doing excellent work for the welfare and development of children, Women and Transgender community in Pakistan. I really appreciate the of this organization.</p>
        </span>
        <span className="dow">
        <img  className="down" style = {{ borderRadius: "50%" , width:"40px", height:"40px", marginLeft: "0px"}}
          src="https://images.unsplash.com/photo-1646836391913-859cdecf098b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Third slide"
        />
        <h1 className="down" style = {{ fontFamily: "Helvetica", fontSize:"17px"}}>Akbar Raza</h1>
        </span>
      </div>
      <div className= "inn" style= {{  marginTop: "4%",marginBottom: "4%" }}>
        <span>
        <p className= "des">Being Government Officer in Social Welfare Department, I participated in GTO activities, they are doing excellent work for the welfare and development of children, Women and Transgender community in Pakistan. I really appreciate the of this organization.</p>
        </span>
        <span className="dow">
        <img  className="down" style = {{ borderRadius: "50%" , width:"40px", height:"40px", marginLeft: "0px"}}
          src="https://images.unsplash.com/photo-1646836391913-859cdecf098b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Third slide"
        />
        <h1 className="down" style = {{ fontFamily: "Helvetica", fontSize:"17px"}}>Akbar Raza</h1>
        </span>
      </div>
      <div className= "inn" style= {{  marginTop: "4%",marginBottom: "4%" }}>
        <span>
        <p className= "des">Being Government Officer in Social Welfare Department, I participated in GTO activities, they are doing excellent work for the welfare and development of children, Women and Transgender community in Pakistan. I really appreciate the of this organization.</p>
        </span>
        <span className="dow">
        <img  className="down" style = {{ borderRadius: "50%" , width:"40px", height:"40px", marginLeft: "0px"}}
          src="https://images.unsplash.com/photo-1646836391913-859cdecf098b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Third slide"
        />
        <h1 className="down" style = {{ fontFamily: "Helvetica", fontSize:"17px"}}>Akbar Raza</h1>
        </span>

      </div>
      
    
      </div>
        </>
        <Footer/>
    </div>
  )
}
export default Home;
