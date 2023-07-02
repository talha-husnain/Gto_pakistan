import React from 'react'
import './App.css';
import Head from './Head.js';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';

export const Home = () => {
  return (
    <div>
        <>
        <Head />
        <div className='ga'>
        <div className="intr" style={{marginLeft: "12%", marginRight: "12%", marginBottom: "20px"}}>
      <span style = {{textAlign: "center"}}>
   
  
     &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
    <p className="int" style = {{textAlign: "center"}}>  <div className="cor" style = {{textAlign: "center"}}>
    <Carousel fade>
      <Carousel.Item>
        <img
          style = {{width: '100%', height: '450px'}}
          src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style = {{ margin: "10px" }}>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          style = {{width: '100%', height: '450px'}}
          src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          style = {{width: '100%', height: '450px'}}
          src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
      <h1 className= "min" style={{marginTop:"-50px", textAlign:"center"}}>Our Mission</h1>
      <p2 className= "meo" style = {{ textAlign: "center" }}>
Good Thinkers Organization(GTO) is an Advocacy & Development NGO striving
to foster human development and uphold rights of underprivileged communities
particularly women, children, transgender persons, PWDs and minorities in 
Pakistan through research based advocacy interventions,legislative and policy
reforms since its Registration in 2003.The organization has very strong linkages
with Government Departments in Pakistan and very strong networking with Ministers
and Members of Legislative Assemblies. GTO is well experienced in legislative drafting,
lobbying, advocacy and networking. It has signed MoU with Economic Affairs Division of
Pakistan in Nov 2021.GTO is member of Trans-Rights Protection Network-Pakistan, Child 
Rights Movement-Punjab, Grow-Green Network-Pakistan, NGOs coordination Council.</p2> </p>
    </span>
    </div>
    <div className="About">
      <h1 className="min" style={{fontSize:"28px", backgroundColor:"#ffa500ba", marginLeft:"8%", marginRight: "8%"}}>our Main Mission</h1>
     <div className="desc">
      <p className="mo" style={{textAlign: "center"}}>The society – we are living in – have been long grappling with daunting challenges all around; poor governance and rule of law, violation of basic human rights, violence against women and transgender persons, child abuse, extreme poverty, illiteracy, inadequate service delivery, economic exploitation, bonded labour, environmental degradation, and child labour are the prominent to name among others. Majority of the people – particularly in rural areas – are not properly familiar with their basic rights and responsibilities. Governance institutions and service delivery departments are less efficient (due to several underlying reasons including resource constraint) in ensuring good governance system and delivering basic services to people. These challenges have been steadily making life more vulnerable with every passing day particularly for women, transgender persons and children. Looking at the scenario, a group of seven self-motivated and visionary young person’s teamed up to address these societal challenges. For this purpose, they felt need of and established an organization named as Good Thinkers Organization (GTO) for Human Development in 2001.</p>
      <p className="mo" style={{textAlign: "center"}}>Established in 2001, the Good Thinkers Organization for Human Development is a non-for profit, non-political and non-government organisation striving for provision of justice and development opportunities to underserved people in Pakistan. Its mission is to forge good governance, protect basic rights and foster human development for the citizens of Pakistan particularly women, children, transgender persons and religious minorities. It is registered with government of Punjab through Directorate of Social Welfare under Voluntary Social Welfare Agencies Act 1961 (registration and control ordinance, XLVI). So far, it has executed 33 projects through valuable support of its sponsors and partners. It is Kasur-based organisation that has been gearing up to expand its intervention in other parts of province as well.</p>
      <p className="mo" style={{textAlign: "center", marginLeft:"0px"}}>“Passion for justice along with human development” and “enthusiasm to address societal issues” is the key driving force behind establishment and functioning of this organisation. The founding members are the self-motivated and energetic persons; their determination was therefore high and ironic. They gathered hundreds of other young persons and initiated this organisation with limited resources. The organisation has been working under the guidance and direction of an autonomous body of a board comprising on seven members. This is heartening to mention all of board members are performing their duties on volunteer basis. These members are self-motivated, energetic and enthusiastic persons who are committed for provision of rights with justice to every citizen without any discrimination.
        <p>GTO has been progressing forward by extending its collaborations, establishing networks, undertaking multifarious projects, exploring new avenues for cooperation and development, and empowering communities particularly marginalised women to make them self-reliant. While designing and implementing its activities, it duly considers guiding principles of international commitments. All of its interventions are directed to add a partial contribution in achievement of SDGs. It fosters the contribution in achievement of all six goals of Education For All by implementing its education programme under guidelines of these goals. It is significantly inspired by the purposeful articles of Convention on the Rights of the Child, and therefore vigilantly places a substantial emphasis on keeping these articles on the heart of its programmes. Furthermore it vigorously discourages gender disparity in its beneficiaries by following the guiding principles of Convention on Elimination of Discrimination Against Women.</p>
      </p>
    
    </div>
    </div>
      </div>
        </>
        <Footer/>
    </div>
  )
}
export default Home;
