import React, { useRef } from 'react'
import './style.css';

function Switch({setDarkMode, checked, setChecked}) {
    const ref = useRef(null);
    function handleChange() {
        setChecked(ref.current.checked);
        setDarkMode(ref.current.checked);
    }

    return (<div className="dark-mode">
        <p className="dark-mode-title">Dark Mode</p>
        <input type="checkbox" checked={checked} ref={ref} onChange={handleChange} className="checkbox" id="checkbox" />
        <label className="switch" htmlFor="checkbox">

        </label>
    </div>
    );
}

export default Switch;