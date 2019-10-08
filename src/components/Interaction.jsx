import React from 'react';

const Interaction = props => {
    const {icon, value, color, title} = props;

    return (
        <div className={`flex-auto cursor-pointer hover:${color}`} title={title}>
            <i className={icon}></i> {value}
        </div>
    );
}

export default Interaction;