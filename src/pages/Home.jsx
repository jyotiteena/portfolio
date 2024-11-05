import { NavLink } from 'react-router-dom'
import hero from '../assets/images/hero.png'
const Home = () => {
  return (
    <main className="main text-white">

      <section id="hero" className="hero section">

        <img src={hero} alt="" data-aos="fade-in" />

        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <NavLink to="/about" className="btn-get-started">About Me</NavLink>

        </div>

      </section>

    </main>
  )
}

export default Home