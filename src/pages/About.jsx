import profile from '../assets/images/profile2.jpeg'
import skills from '../layout/Skill'

const About = () => {
  return (
    <section id="about" className="about section">

      <div className="col-lg-7 mx-auto section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>My passion for technology extends beyond just using these tools. I am deeply committed to continuous learning and staying updated with emerging technologies.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row mx-0 gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src={profile} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 content">
            <h2 className='pb-3'>MERN Stack Developer &amp; Instructor.</h2>
            <div className="row mx-0">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>06 Jun 1998</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Jodhpur, Rajasthan</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Medium Link:</strong> <a href='https://medium.com/@jyotijingar' target='_blank'>click here</a></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master Of Computer Application</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>jingarjyoti9413@gmail.com</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              With four years of experience in technology, I've had the opportunity to hone my skills across different domains. My journey began with PHP, where I built a strong foundation in web development. PHP was my entry point into understanding server-side scripting, database interactions, and creating dynamic websites. It provided me with the essential skills needed to kickstart my career in technology.
              <br />
              <br />
              After gaining valuable experience with PHP, I transitioned to the MERN stack, which includes MongoDB, Express.js, React, and Node.js. This shift was driven by my desire to work with modern, full-stack JavaScript technologies. The MERN stack has allowed me to develop dynamic, scalable applications with a streamlined development process.
              <br />
              <br />
              My passion for technology extends beyond just using these tools. I am deeply committed to continuous learning and staying updated with emerging technologies. I actively seek out new and innovative technologies that are not only cutting-edge but also easy to learn and apply. This mindset helps me stay ahead of the curve and adapt to new trends in the tech world.
              Teaching and sharing knowledge is another significant aspect of my career. I enjoy explaining complex concepts and helping others grasp new technologies. By contributing to the tech community, I aim to inspire and guide fellow developers, fostering a collaborative environment where learning and growth are encouraged.
              <br />
              <br />
              Overall, my goal is to remain at the forefront of technological advancements, leveraging my skills to build impactful solutions and inspire others on their tech journeys. Whether through hands-on projects or educational content, I am dedicated to pushing the boundaries of what technology can achieve.
            </p>
          </div>
        </div>

      </div>
      <div className="col-lg-7 mx-auto section-title mt-5" data-aos="fade-up">
        <h2>Skills</h2>
        <p>I actively seek out new and innovative technologies that are not only cutting-edge but also easy to learn and apply.</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row mx-0 text-center">
          {
            skills.map((skill, index) => (
              <>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-3" key={index}>
                  <img src={skill.image} alt="" className='w-50' height={90} />
                  <p className='pt-2'>{skill.para}</p>
                </div>
              </>
            ))
          }


        </div>
      </div>

    </section>
  )
}

export default About