import React from 'react';

function TimerValue({secondsElapsed}) {

    return (
        <div className="Timer__value">
            {Math.floor(secondsElapsed / 60)}:{("0" + secondsElapsed % 60).slice(-2)}
        </div>
    );
}

export default TimerValue;
