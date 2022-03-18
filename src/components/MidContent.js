import classes from './MidContent.module.css';

const MidContent = ({ content }) => {
    return (
        <div className={ classes.title }> { content } </div>
    )
}

export default MidContent;