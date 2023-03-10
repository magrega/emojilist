import './Dropdown.css'
const Dropdown = ({getSelectedValue}) => {

    return (

        <form className="limitItems">
            <label> Limit items </label>
            <select onChange={getSelectedValue}>
                <option value="14"> 15
                </option>
                <option value="29"> 30
                </option>
                <option value="49"> 50
                </option>
                <option value="All"> All
                </option>
            </select>
        </form>

    );
};

export default Dropdown;