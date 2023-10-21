import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Education() {
    return (
        <>
    <div className="background" 
    style={{ backgroundImage: `url('https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150063081.jpg?size=626&ext=jpg&ga=GA1.1.1274431862.1697766654&semt=sph')`,
    backgroundSize: "100%",
    color:"white",
    minHeight: "100vh",
   

     }}>
        <h1>Education</h1>
                 
          
        <section className="banner" style={{
                marginTop: "10px",
                minHeight: "50vh",
                backgroundColor: "rgba(0, 0, 0, 0)",
              
            }}>
            <h2>Bachelors of Business Adminstration</h2>
            <h3>Weber State University</h3>
            <p>Course work in Accounting, Management, Finance, Human Resources.
                                
                <img src="https://www.weber.edu/wsuimages/academics/images/colleges.jpg" alt="Colleges" align="right" width="500" height="250"></img>
            </p>
        </section>
        <section className="banner" style={{
                marginTop: "10px",
                minHeight: "50vh",
                backgroundColor: "rgba(0, 0, 0, 0)",
                
            }}>
                <h2>Eagle Corps Full Stack Boot Camp 2023</h2>
                    <p>"The first coding program designed by veterans so veterans can successfully transition into a civilian career. Together, we lead the way."
                    Gained knowledge from the Boot camp utilizing and running software such as: JavaScript, HTML, CSS, and React to create meaninfgul projects
                    <img src="https://lh3.googleusercontent.com/ANBcbCyPfRh1hJ7fe8RoYDs1gfyuLWBJZ1uc_3CN-0eKx8VLKftlRDa-gQRTReFba63ZfFFS19OvvrfOH1gnEi8ukgwxjvgkjLdn=s0" alt="none" 
                        align="left" width="500" height="200"
                        ></img>
                    </p>
        </section>
        <section className="banner" style={{
                marginTop: "10px",
                minHeight: "50vh",
                backgroundColor: "rgba(0, 0, 0, 0)",
               
            }}>
                <h2>Free Code Camp Certificate Python 2022</h2>  
                 <p>
                    <img src="data:image/png;base64,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" 
                    alt="none" align="right" width="500px" height="250px">

                    </img>
                 </p>
            </section>
              
        </div>
        </>)
}

export default Education;