import { useState, useEffect } from 'react';
import NotFound from "../NotFound/NotFound";
import getEmojis from "../../services/emojiData";
import EmojiRow from "../EmojiRow/EmojiRow";

import './EmojiContainer.css';

const EmojiContainer = ({ search, limit }) => {
    console.log(limit);
    const [serverEmojis, setServerEmojis] = useState([{
        title: "100",
        symbol: "💯"
    }])

    const updateServerEmojis = () => {
        getEmojis().then(emojis => {
            setServerEmojis(emojis)
        })
    }

    const filteredEmojis = serverEmojis.filter(emoji => emoji.title.toLowerCase().includes(search) || emoji.keywords.toLowerCase().includes(search));
    filteredEmojis.length = isNaN(limit) ? serverEmojis.length : limit;

    const renderEmojiRows = (emojiArray) => {
        console.log("hey");
        return emojiArray.map((emoji, index) => {
            return (
                <EmojiRow item={emoji} key={index} />
            )
        })
    }

    const emojiRows = renderEmojiRows(filteredEmojis);

    useEffect(() => updateServerEmojis(), []);

    return (
        <div className="EmojiContainer">
            {emojiRows.length > 0 ? emojiRows : <NotFound />}
        </div>
    );
};

export default EmojiContainer;