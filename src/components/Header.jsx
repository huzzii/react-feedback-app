import React from 'react'
import PropTypes from 'prop-types';

export default function Header({text, bgColor, textColor}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    };

    return (
        <div>
            <header style={headerStyles}>
                <div className="container">
                    <h2>{text}</h2>
                </div>
            </header>
        </div>
    )
}

Header.defaultProps = {
    text: "FeedBack UI",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95"
}

Header.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}