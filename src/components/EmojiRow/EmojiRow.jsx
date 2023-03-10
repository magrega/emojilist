import { useEffect, useState } from "react";
import getEmojis from "../../services/emojiData"
import './EmojiRow.css'

const EmojiRow = ({ search, limit }) => {

    const [array, setArray] = useState([{
        title: "100",
        symbol: "💯"
    }])


    const updateArray = () => {
        getEmojis().then(emojis => {
            setArray(emojis)
        })
    }

    const data = array.filter(item => item.title.toLowerCase().includes(search) || item.keywords.toLowerCase().includes(search));

    const renderItems = (arr) => {
        console.log("hey");
        return arr.map((item, index) => {
            if (index > limit) return;

            return (
                <div className="EmojiRow" key={index}>
                    <span className="EmojiRow__symbol">{item.symbol}</span>
                    <span className="EmojiRow__title">{item.title}</span>
                </div>
            )
        })

    }
    const items = renderItems(data);


    useEffect(() => updateArray(), []);

    return (
        <>
            {items.length > 0 ? items : <h1 style={{ textAlign: "center" }}>Nothing found</h1>}
        </>
    );
};

export default EmojiRow;