import './EmojiLimit.css'

const EmojiLimit = ({ getSelectedValue }) => {

    return (
        <form className="EmojiLimit">
            <label> Limit items </label>
            <select onChange={getSelectedValue}>
                <option value="15"> 15
                </option>
                <option value="30"> 30
                </option>
                <option value="50"> 50
                </option>
                <option value={null}> All
                </option>
            </select>
        </form>
    );
};

export default EmojiLimit;