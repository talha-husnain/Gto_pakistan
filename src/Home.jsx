import React from 'react'
import './App.css';
import Head from './Head.js';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';
import BoxComponent from './components/box';
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
      <BoxComponent
      title = "Vision"
      text = "Our vision is to promote the Rule of Law, good governance, and the protection of citizens' rights, with a particular emphasis on the  vulnerable groups in our society here."
      backgroundColor = "black"
      link = "/Vision"
      />
      <BoxComponent
      title = "Mission"
      text = "Strive to forge Rule of Law, good governance and protect rights of citizens particularly women, children, persons with disability, trans-community and religious minoritie"
      backgroundColor = "black"
      link={"/Mission"}
      />
    </div>
    <h1 className= "min" style={{backgroundColor: "orange", color: "white", textAlign:"center"}}>Thematic Areas</h1>
    <div className="box12">
      <BoxComponent
      title = "Rule of Law"
      text = "In our pursuit of the Rule of Law, we envision a society where every individual has equal access to justice and opportunities for development."
      backgroundColor = "black"
      link = "/Rule"
      />
      <BoxComponent
      title = "Human Rights"
      text = "When it comes to Human Rights, our goal is to create a society where everyone enjoys equal access to justice and development opportunities."
      backgroundColor = "black"
      link={"/Right"}
      />
      <BoxComponent 
      title = "Health "
      text = "In the realm of Health, we strive for a society where everyone enjoys equal access to justice and development opportunities avaible to them."      
      backgroundColor = "black"
      link = "/Child"
      />
            <BoxComponent
      title = "Women Rights"
      text = "When it comes to Women's Rights, our vision is a society where everyone enjoys equal access to justice and development opportunities.      "
      backgroundColor = "black"
      link = "/Women"
      />

<BoxComponent
      title = "Disaster Management"
      text = "In the field of Disaster Management, our mission is to ensure a society where everyone enjoys equal access to justice and development opportunities.      "
      backgroundColor = "black"
      link = "/Diasaster"
      />
    <BoxComponent
      title = "Environment"
      text = "In our commitment to the Environment, we aim to foster a society where everyone enjoys equal access to justice and development opportunities."
      backgroundColor = "black"
      link = "/Envirn"
      />
      <BoxComponent
      title = "Education"
      text = "In the realm of Education, our mission is to create a society where everyone enjoys equal access to justice and development opportunities "
      backgroundColor = "black"
      link = "/Education"
      />
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
        <h1 className="down" style = {{ fontFamily: "Helvetica", fontSize:"17px"}}>Sardar Fakhar Ali Adv</h1>
        <h1  style = {{ fontFamily: "Helvetica", fontSize:"13px", color: 'grey'}}>Social Welfare Officer,Government of the Punjab</h1>

        </span>
      </div>
      <div class="inn">
  <span class="testimonial">
    <p class="des">I have visited GTO and participated in a consultation, organized by them on Child Rights, i observed that GTO is doing very excellent work. Their unique work for the protection of children from exploitation and abuse through legislative reforms is really appreciated.</p>
  </span>
  <span class="author-info">
    <img class="author-image" 
         src="https://images.unsplash.com/photo-1646836391913-859cdecf098b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
         alt="Third slide"/>
    <h1 class="author-name">Saad Wasim Sh.</h1>
    <h1 class="author-title">Social Welfare Officer, Government of the Punjab</h1>
  </span>
</div>
      <div className= "inn" style= {{  marginTop: "4%",marginBottom: "4%" }}>
        <span>
        <p className= "des">Without legislative reforms, protection of rights is not possible and GTO is doing very good role in this context. I trust, if NGOs play their Advocacy role for Police and legislative reforms, we can make sure big change in our society. GTO role is really admirable.</p>
        </span>
        <span className="dow">
        <img  className="down" style = {{ borderRadius: "50%" , width:"40px", height:"40px", marginLeft: "0px"}}
          src="https://images.unsplash.com/photo-1646836391913-859cdecf098b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Third slide"
        />
        <h1 className="down" style = {{ fontFamily: "Helvetica", fontSize:"17px"}}>Akbar Raza</h1>
        <h1  style = {{ fontFamily: "Helvetica", fontSize:"13px", color: 'grey'}}>Social Welfare Officer,Government of the Punjab</h1>

        </span>

      </div>
      
    
      </div>
        </>
        <Footer/>
    </div>
  )
}
export default Home;
