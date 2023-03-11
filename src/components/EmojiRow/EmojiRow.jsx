import './EmojiRow.css';

const EmojiRow = ({item, index}) => {

    return (
        <div className="EmojiRow">
            <span className="EmojiRow__symbol">{item.symbol}</span>
            <span className="EmojiRow__title">{item.title}</span>
        </div>
    );
};

export default EmojiRow;