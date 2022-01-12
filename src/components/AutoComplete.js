import { useState } from 'react';
import '../styles/AutoComplete.css';

const AutoComplete = ({ data }) => {
    let [suggestions, setSuggestions] = useState([]);
    let [text, setText] = useState('');

    const addText = (e) => {
        const value = e.target.value;
        if (value.length > 0) {
            const rgx = new RegExp(`^${value}`, 'i');
            suggestions = data.sort().filter(s => rgx.test(s));
        }
        setSuggestions(suggestions);
        setText(value);
    }

    const suggestionSelected = (value) => {
        setText(value);
        setSuggestions([]);
        return;
    }

    const showSuggestions = () => {
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul className='autoComplete-ul'>
                {suggestions.map((item) => <li onClick={() => suggestionSelected(item)} className='autoComplete-li'>{item}</li>)}
            </ul>
        )
    }

    return (
        <div className="autoComplete">
            <input type="text" onChange={addText} value={text} className='autoComplete-input' />
            {showSuggestions()}
        </div>
    )
}

export default AutoComplete;