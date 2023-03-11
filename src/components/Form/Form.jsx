import './Form.css';

const Form = ({ onFormChange, formValue }) => {

    return (
        <input
            type="text"
            className="searchBar"
            onChange={onFormChange}
            value={formValue}
            placeholder="type something..."
        />
    );
};

export default Form;