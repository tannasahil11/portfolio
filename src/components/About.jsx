import '../styles/About.css';
function About(){
    return(
        <div className="container d-flex flex-column mx-auto align-items-center justify-content-center gap-4 mt-2">
            <div className="card bg-black text-white box-shadow p-3 w-75" style={{ border: '1px solid #fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
                <h3>Education</h3>
                <h4>Bachelors of Applied Computer Science, Dalhousie University</h4>
                <p>September 2022- April 2026 (Expected)</p>
                <p>•	Relevant Coursework: Server-Side Scripting, Data Structures and Algorithms (DSA), Unit Testing (JUnit5), Object-Oriented programming, Agile Development, Database Systems, Network Computing and Workplace Communication</p>
            </div>
            <div className="card bg-black text-white box-shadow p-3 w-75" style={{ border: '1px solid #fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', marginBottom: '50px' }}>
                <h3>Experience</h3>
                <h4>Software Developer Intern, RadixWeb</h4>
                <p>May – August 2021</p>
                <p>•	Collaborated in a cross-functional team of 6 members to design and implement multiple features, leveraging Agile methodologies to exceed project expectations.<br></br>
                •	Worked with over 20 different clients to help design their web applications by leveraging design concepts like prototyping, usability and requirements testing.
                </p>
            </div>
            
        </div>
    )
}

export default About