import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        icon: "sun"
    },
    winter: {
        text: "Burr, it's chilly",
        icon: "snowflake"
    }

}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'winter' ? "Burr, it's chilly" : "Let's hit the beach";
    const icon = season === 'winter' ? 'snowflake' : 'sun';

    return (
        <div>
            <i className={`${icon} icon`} />
            <h1>{text}</h1>
            <i className={`${icon} icon`} />
        </div>        
    );
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9 ) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer';        
    }
}

export default SeasonDisplay;