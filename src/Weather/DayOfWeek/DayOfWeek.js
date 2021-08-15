import React from 'react';

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function DayOfWeek({day}) {

    return (
        <span>{daysOfWeek[day]}</span>
    );
}

export default DayOfWeek;