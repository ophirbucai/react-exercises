import React from 'react';

function DayOfWeek({day}) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <span>{daysOfWeek[day]}</span>
    );
}

export default DayOfWeek;