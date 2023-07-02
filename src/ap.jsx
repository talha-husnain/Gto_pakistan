import './App.css';
import img from './gto_logo.jpg';
import Carousel from 'react-bootstrap/Carousel';
import { useMediaQuery } from 'react-responsive'
import DztImageGalleryComponent from './Gal';
import Toast from 'react-bootstrap/Toast';
import Head from "./Head";
import {Link} from 'react-router-dom';
import Table from './Project';
import Jobs from './Jobs';
import Gal from "./Gal";

function App() {
  return (
    <>
     {/* <div className="Ap">
      <Gal/>
      
      
    </div> */}







    {/* <Jobs/> */}
    
{/* <Table/> */}

    {/* This is our publication page */}
          {/* <h1 className="min" style={{fontSize:"28px", backgroundColor:"orange"}}>Our PUBLICATIONS</h1>

    <div className="pub">
      <ul>
      
      <a href="https://www.gtopakistan.org/wp-content/uploads/2021/03/Research-Study-COVID-19-impact-on-Transgender-Community-1.pdf">1- Inclusion of Transgender Persons in Response of Society and State to COVID-19 at PUNJAB-PAKISTAN <br></br></a>
      <a href="https://www.gtopakistan.org/wp-content/uploads/2021/03/Baseline-Survey-of-Home-Base-Working-Women-GTO.pdf">2- Baseline Survey of Home Base Working Women GTO <br></br></a>
      <a href="hhttps://www.gtopakistan.org/wp-content/uploads/2021/10/Review-Laws-related-to-Transgender-Community-2020-by-GTO-Pakistan.pdf">3- GTO Research Report–Poverty and Child Labour<br></br></a>
      <a href="https://www.gtopakistan.org/wp-content/uploads/2021/03/Situation-Assessment-Report-Recognition-of-Transgender.pdf">4- GTO Research Report–Gender Disparity in access to Basic Education<br></br></a>
      <a href="https://www.gtopakistan.org/wp-content/uploads/2021/03/GTO-research-report-gender-disparity-web-edition.pdf">5- Situation Assessment Report (Recognition of Transgender Community) <br></br></a>
      <a href="https://www.gtopakistan.org/wp-content/uploads/2021/03/GTO-research-report-gender-disparity-web-edition.pdf">6- STUDY TO REVIEW SUFFICIENCY OF EXISTING LAWS ON RIGHTS <br></br></a>
      </ul>

    </div> */}





    {/* This is our team page */}
        <h1 className="min" style={{fontSize:"28px", backgroundColor:"orange"}}>GTO Board Members</h1>

    <div className="team">
    <div className="row">
  <div className="column">
    <div className="card">
    <img
          style = {{width: '250px', height: '250px', borderRadius: "50%"}}
          src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />      <div className="container">
        <h2 style={{ backgroundColor: "orange" }}>Jane Doe</h2>
        <p className="title">CEO &amp; Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <span><button className="button">Contact</button></span>
        <div className="count" style={{textAlign: 'center'}}>.... </div>
        <div className="cont"> 24100245@lums.edu.pk</div>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <img
          style = {{width: '250px', height: '250px', borderRadius: "50%"}}
          src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button className="button">Contact</button></p>
        <div className="count" style={{textAlign: 'center'}}>.... </div>
        <div className="cont"> 24100245@lums.edu.pk</div>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
    <img
          style = {{width: '300px', height: '230px'}}
          src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />      <div className="container">
        <h2 style={{ backgroundColor: "orange", marginTop: "10px" }}>Jane Doe</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button className="button">Contact</button></p>
        <div className="count" style={{textAlign: 'center'}}>.... </div>
        <div className="cont"> 24100245@lums.edu.pk</div>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <img
          style = {{width: '300px', height: '230px'}}
          src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
<div className="row">
  <div className="column">
    <div className="card">
    <img
          style = {{width: '300px', height: '230px'}}
          src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO &amp; Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <span><button className="button">Contact</button></span>
        <div className="count" style={{textAlign: 'center'}}>.... </div>
        <div className="cont"> 24100245@lums.edu.pk</div>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <img
          style = {{width: '300px', height: '230px'}}
          src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button className="button">Contact</button></p>
        <div className="count" style={{textAlign: 'center'}}>.... </div>
        <div className="cont"> 24100245@lums.edu.pk</div>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
    <img
          style = {{width: '300px', height: '230px'}}
          src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button className="button">Contact</button></p>
        <div className="count" style={{textAlign: 'center'}}>.... </div>
        <div className="cont"> 24100245@lums.edu.pk</div>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <img
          style = {{width: '300px', height: '230px'}}
          src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
<div className="row">
  <div className="column">
    <div className="card">
    <img
          style = {{width: '300px', height: '230px'}}
          src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO &amp; Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <span><button className="button">Contact</button></span>
        <div className="count" style={{textAlign: 'center'}}>.... </div>
        <div className="cont"> 24100245@lums.edu.pk</div>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <img
          style = {{width: '300px', height: '230px'}}
          src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button className="button">Contact</button></p>
        <div className="count" style={{textAlign: 'center'}}>.... </div>
        <div className="cont"> 24100245@lums.edu.pk</div>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
    <img
          style = {{width: '300px', height: '230px'}}
          src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button className="button">Contact</button></p>
        <div className="count" style={{textAlign: 'center'}}>.... </div>
        <div className="cont"> 24100245@lums.edu.pk</div>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <img
          style = {{width: '300px', height: '230px'}}
          src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>

</div>







    {/* This is About us page */}
    {/* <div className="About">
      <h1 className="min" style={{fontSize:"28px", backgroundColor:"orange"}}>HISTORY & BACKGROUND</h1>
     <div className="desc">
      <p>The society – we are living in – have been long grappling with daunting challenges all around; poor governance and rule of law, violation of basic human rights, violence against women and transgender persons, child abuse, extreme poverty, illiteracy, inadequate service delivery, economic exploitation, bonded labour, environmental degradation, and child labour are the prominent to name among others. Majority of the people – particularly in rural areas – are not properly familiar with their basic rights and responsibilities. Governance institutions and service delivery departments are less efficient (due to several underlying reasons including resource constraint) in ensuring good governance system and delivering basic services to people. These challenges have been steadily making life more vulnerable with every passing day particularly for women, transgender persons and children. Looking at the scenario, a group of seven self-motivated and visionary young person’s teamed up to address these societal challenges. For this purpose, they felt need of and established an organization named as Good Thinkers Organization (GTO) for Human Development in 2001.</p>
      <p>Established in 2001, the Good Thinkers Organization for Human Development is a non-for profit, non-political and non-government organisation striving for provision of justice and development opportunities to underserved people in Pakistan. Its mission is to forge good governance, protect basic rights and foster human development for the citizens of Pakistan particularly women, children, transgender persons and religious minorities. It is registered with government of Punjab through Directorate of Social Welfare under Voluntary Social Welfare Agencies Act 1961 (registration and control ordinance, XLVI). So far, it has executed 33 projects through valuable support of its sponsors and partners. It is Kasur-based organisation that has been gearing up to expand its intervention in other parts of province as well.</p>
      <p>“Passion for justice along with human development” and “enthusiasm to address societal issues” is the key driving force behind establishment and functioning of this organisation. The founding members are the self-motivated and energetic persons; their determination was therefore high and ironic. They gathered hundreds of other young persons and initiated this organisation with limited resources. The organisation has been working under the guidance and direction of an autonomous body of a board comprising on seven members. This is heartening to mention all of board members are performing their duties on volunteer basis. These members are self-motivated, energetic and enthusiastic persons who are committed for provision of rights with justice to every citizen without any discrimination.
        <p>GTO has been progressing forward by extending its collaborations, establishing networks, undertaking multifarious projects, exploring new avenues for cooperation and development, and empowering communities particularly marginalised women to make them self-reliant. While designing and implementing its activities, it duly considers guiding principles of international commitments. All of its interventions are directed to add a partial contribution in achievement of SDGs. It fosters the contribution in achievement of all six goals of Education For All by implementing its education programme under guidelines of these goals. It is significantly inspired by the purposeful articles of Convention on the Rights of the Child, and therefore vigilantly places a substantial emphasis on keeping these articles on the heart of its programmes. Furthermore it vigorously discourages gender disparity in its beneficiaries by following the guiding principles of Convention on Elimination of Discrimination Against Women.</p>
      </p>
      <h1 className="min" style={{fontSize:"25px", backgroundColor:"orange"}}> VISION, MISSION & OBJECTIVE</h1>
      <h1 className="min" style={{fontSize:"20px"}}> VISION</h1>
      <p>A society where everyone enjoys equal access to rights and justice with full dignity.</p>
      <h1 className="min" style={{fontSize:"20px"}}> Mission</h1>
      <p>Strive to forge a safe, secure and protected environment for Children, Adolescent, transgenders, Youth and Women of all races, cultures, ethnicity, religion, socio economic background, gender identity, ability in Pakistan, where everyone can enjoy their rights freely and without any discrimination.</p>
      <h1 className="min" style={{fontSize:"20px" , backgroundColor:"orange"}}> OBJECTIVES</h1>
      <ol>
        <li className="it">Cultivate a culture of a transparent, accountable, democratic, and good governance to promote justice and human rights</li>
        <li className="it">Enable citizens to enjoy their fundamental rights as enshrined in national constitution and international treaties</li>
        <li className="it">Combat with gender inequality through social, democratic, and economic empowerment of women and transgender persons</li>
        <li className="it">Promote rights and development of children, and protect them from hazardous forms of labour</li>
        <li className="it">Build peace, develop social and religious harmony, and reduce extremisms by engaging youth</li>
        <li className="it">Reduce economic exploitation and poverty by strengthening economic position of vulnerable youth</li>
      </ol>
      


      </div>
    </div> */}
    
{/* This is Home Page */}
    {/* <div className="App">
      <h1 className = "head"> 
      Good Think Organization</h1>
      <img className="im" src={img} alt = "fuck"></img>
      <h2 className = "bloc">A Non-profit NGO, working for Human right through legislative Reforms in Pakistan</h2>
      <h2 className = "add"> Office: 22-club Road, Abdul Shakoor Colony, Kasur(Punjab) Pakistan</h2>
      <pre className = "con">
        www.gtopakistan.org    Tel: +92-322-6812700    Email: info@gtopakistan.org
      </pre>  
    </div>
    <div className="nav">
      <span>HOME</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>ABOUT US</span> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      <span>PUBLICATIONS</span> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      <span>PROJECTS</span> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      <span>OPPORTUNITIES</span> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      <span>CONTACT US</span> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      <span>MEDIA</span> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      <span>DONATE US</span> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    
    <div className="intr">
      <span>
   
  
     &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
    <p1 className="int">  <div className="cor">
    <Carousel fade>
      <Carousel.Item>
        <img
          style = {{width: '450px', height: '400px'}}
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
          style = {{width: '100%', height: '400px'}}
          src="https://images.unsplash.com/photo-1554796104-5c39d0551b52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style = {{width: '100%', height: '400px'}}
          src="https://images.unsplash.com/photo-1646836391913-859cdecf098b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Third slide"
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
      <h1 className= "min">Introduction</h1>
Good Thinkers Organization
(GTO) is an Advocacy & Development NGO striving to foster human development and uphold rights of underprivileged communities particularly women, children, transgender persons, PWDs and minorities in Pakistan through research based advocacy interventions, legislative and policy reforms since its Registration in 2003.

The organization has very strong linkages with Government Departments in Pakistan and very strong networking with Ministers and Members of Legislative Assemblies. GTO is well experienced in legislative drafting, lobbying, advocacy and networking. It has signed MoU with Economic Affairs Division of Pakistan in Nov 2021. 

GTO is member of Trans-Rights Protection Network-Pakistan, Child Rights Movement-Punjab, Grow-Green Network-Pakistan, NGOs coordination Council.</p1>
    </span>
    </div>
    <div className="box12">
      <span>
        <div className="box">
          <span>
        <h1 className= "min"> Vision</h1>
        <p>A society where everyone enjoys equal access to justice and development opportunities A society where everyone enjoys equal access to justice and development opportunities</p>
        </span>
        </div>
      </span>
      <span>
        <div className="box1">
          <span>
        <h1 className= "min"> Mission</h1>
        <p>Strive to forge Rule of Law, good governance and protect rights of citizens particularly women, children, persons with disability, trans-community and religious minorities</p>
        </span>
        </div>
        </span>
    </div>
    <h1 className= "min">Thematic Areas</h1>
    <div className="box12">
      <span>
        <div className="boxa">
        <h1 className= "min" style= {{ fontSize: "30px" }}> Rule of Law</h1>&nbsp;
        </div>
      </span>
      <span>
        <div className="box1a">
        <h1 className= "min" style= {{ fontSize: "30px"}}> Human & Democratic Rights</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        </span>
        <span>
        <div className="box2a">
        <h1 className= "min" style= {{ fontSize: "30px"}}> WASH, Basic Health & Education</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        </span>
    
      <span>
        <div className="boxa">
        <h1 className= "min" style= {{ fontSize: "30px"}}> Disaster Management</h1>
        </div>
      </span>
      <span>
        <div className="box1a">
        <h1 className= "min" style= {{ fontSize: "30px"}}> Environment</h1>
        </div>
        </span>
        <span>
        <div className="box2a">
        <h1 className= "min" style= {{ fontSize: "30px"}}> Women Political Rights</h1>
        </div>
        </span>
    </div>
    <h1 className= "min"> Our Partners in Development</h1>
<div className="par">
  <span>
    <Carousel fade>
      <Carousel.Item>
        <img
          style = {{width: '100%', height: '400px'}}
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
          style = {{width: '100%', height: '400px'}}
          src="https://images.unsplash.com/photo-1554796104-5c39d0551b52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style = {{width: '100%', height: '400px'}}
          src="https://images.unsplash.com/photo-1646836391913-859cdecf098b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </span>


   
    </div>
    <h1 className= "min">Stakeholders' Review</h1>
    <div div className= "per">
      
      <div className= "inn">
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
      <div className= "inn">
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
      <div className= "inn">
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
 */}
    </>
    
     
    
  );
}

export default App;
