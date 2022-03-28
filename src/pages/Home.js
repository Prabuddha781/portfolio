import 'bootstrap/dist/css/bootstrap.min.css';

import classes from './Home.module.css';

import headshot from '../icons/headshot.png';
import headshotMd from '../icons/headshot.png';
import headshotSm from '../icons/headshot_0.5x.png';

import diy from '../icons/DIY_1x.png';
import diyMd from '../icons/DIY_1x.png';
import diySm from '../icons/DIY_0.5x.png';

import team from '../icons/team.png';

import immigrant from '../icons/immigrant.png'

import Card from '../components/Card';

import Carousel from 'react-bootstrap/Carousel'

import NavBar from '../components/NavBar';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.getElementsByClassName("carousel-inner")[0].style.height = "100%";
  }, [])

  return (
    <section className={`${ classes.sectionContainer }`}>
      < NavBar />
      < Carousel className="h-100" pause={ false } >
        < Carousel.Item className="h-100">
          < Card title={ "Hi! I am Pierre." } titleSupport={ "I'm a self-learner." } subtitle={ "And so much more...." } img={ headshot } sizeDefault={ "40vw" } imgMd={ headshotMd } sizeMd={ "50vw" } imgSm={ headshotSm } sizeSm={ "80vw" } footer={ "Let me tell you who I am." }/>  
        </Carousel.Item>
        < Carousel.Item className="h-100">
          < Card title={ "I am a doer." } titleSupport={ "And a risk taker." } subtitle={ "I switched to CS in my junior year. I got my first SWE internship before I completed the introductory CS course." } img={ diy } imgMd={ diyMd } imgSm={ diySm } sizeSm={ "70vw" } sizeMd={ "50vw" } sizeDefault={ "40vw" } footer={ "Not bragging though :)" }/>  
        </Carousel.Item>
        < Carousel.Item className="h-100">
          < Card title={ "I'm a builder." } titleSupport={ "And I build in teams." } subtitle={ "The best teams have no one in charge and act with a sense of urgency even when there are no deadlines." } img={ team } imgMd={ team } imgSm={ team } sizeSm={ "70vw" } sizeMd={ "50vw" } sizeDefault={ "40vw" } footer={ "And finally" }/>  
        </Carousel.Item>
        <Carousel.Item className="h-100">
          < Card title={ "An immigrant." } titleSupport={ "I take my decisions wisely." } subtitle={ "I don't have safety-nets. And I know that ambition and hard work yield great results in 🇺🇸." } img={ immigrant } imgMd={ immigrant } imgSm={ immigrant } sizeSm={ "70vw" } sizeMd={ "50vw" } sizeDefault={ "40vw" } footer={ "Thank you!" }/>  
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Home;