import React from "react";


const player = () => {

    return (
        <div className="player" >
            <div className="time-control">
                <p> start Time </p>
                <input type="range" />
                <p> End Time</p>
            </div>

            <div className="play-control"></div>


        </div>


    );
};
export default player;