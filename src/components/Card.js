import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Card.module.css';

const Cards = ({ title, titleSupport, subtitle, img, imgSm, imgMd, imgLg, sizeSm, sizeMd, sizeDefault }) => {
    return (
        <section className={`d-flex flex-lg-row flex-column ${ classes.sectionSize }`}>
            <div className="d-flex flex-column p-lg-5">
                <div className={`${ classes.title }`}>
                    { title }
                </div>
                <div className={`${ classes.titleSupport }`}>
                    { titleSupport }
                </div>
                <div className={`${ classes.subtitle }`}>
                    { subtitle }
                </div>
            </div>

            <div className={` ms-auto me-auto`}>
                <img src={ img } srcSet={`${imgSm} 112w, ${imgMd} 398w `} sizes={`(max-width: 500px) ${ sizeSm }, (max-width: 992px) ${ sizeMd }, ${ sizeDefault }`}/>
            </div>
        </section>
    )
}

export default Cards;