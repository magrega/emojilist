import './EmojiContainer.css';
const EmojiContainer = ({ children }) => {

    return (
        <div className="EmojiContainer">
            {children}
        </div>

    );
};

export default EmojiContainer;