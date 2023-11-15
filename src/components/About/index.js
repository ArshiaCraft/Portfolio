import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a seasoned backend developer with a passion for crafting robust
            and efficient solutions. My expertise lies in .NET Core, Python,
            JavaScript, and C++, where I have honed my skills in designing and
            implementing scalable systems. With a keen eye for detail and a
            commitment to excellence, I thrive in the dynamic world of backend
            development, tackling complex challenges to ensure seamless
            functionality and optimal performance.
          </p>
          <p align="LEFT">
            My commitment to staying abreast of the latest technologies allows
            me to leverage cutting-edge tools, ensuring that the solutions I
            build are not only reliable but also positioned at the forefront of
            industry standards.
          </p>
          <p>
            As a backend developer, my approach is rooted in a combination of
            technical expertise and a collaborative mindset. I excel in working
            with cross-functional teams, translating business requirements into
            scalable and efficient backend solutions. With a solid foundation in
            .NET Core, Python, JavaScript, and C++, I am dedicated to pushing
            the boundaries of what backend development can achieve, delivering
            impactful results that elevate the user experience and drive success
            for the projects I undertake.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
