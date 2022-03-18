import 'bootstrap/dist/css/bootstrap.min.css';

import headshot from '../Icons/headshot.png';
import headshotMd from '../Icons/headshot.png';
import headshotSm from '../Icons/headshot_0.5x.png';

import diy from '../Icons/DIY_1x.png';
import diyMd from '../Icons/DIY_1x.png';
import diySm from '../Icons/DIY_0.5x.png';

import team from '../Icons/team.png';

import immigrant from '../Icons/immigrant.png'

import Card from '../components/Card';
import MidContent from '../components/MidContent';

const Home = () => {
  return (
    <section className="h-100">
        < Card title={ "Hi! I am Pierre." } titleSupport={ "I'm a self-learner." } subtitle={ "And so much more...." } img={ headshot } sizeDefault={ "40vw" } imgMd={ headshotMd } sizeMd={ "50vw" } imgSm={ headshotSm } sizeSm={ "80vw" } />  
        < MidContent content={ "Let me tell you who I am." } />
        < Card title={ "I am a doer." } titleSupport={ "And a risk taker." } subtitle={ "I switched to CS in my junior year. I got my first SWE internship before I completed the introductory CS course." } img={ diy } imgMd={ diyMd } imgSm={ diySm } sizeSm={ "70vw" } sizeMd={ "50vw" } sizeDefault={ "40vw" } />  
        < MidContent content={ "Not bragging though :)" } />
        < Card title={ "I'm a builder." } titleSupport={ "And I build in teams." } subtitle={ "The best teams have no one in charge and act with a sense of urgency even when there are no deadlines." } img={ team } imgMd={ team } imgSm={ team } sizeSm={ "70vw" } sizeMd={ "50vw" } sizeDefault={ "40vw" } />  
        < MidContent content={ "And finally I am" } />
        < Card title={ "An immigrant." } titleSupport={ "I take my decisions wisely." } subtitle={ "I don't have safety-nets. And I know that ambition and hard work yield great results in 🇺🇸." } img={ immigrant } imgMd={ immigrant } imgSm={ immigrant } sizeSm={ "70vw" } sizeMd={ "50vw" } sizeDefault={ "40vw" } />  
        < MidContent content={ "Thanks!" } />
    </section>
  );
}

export default Home;