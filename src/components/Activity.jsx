import React from 'react'
import {  useDispatch } from 'react-redux'


const Activity = ({id,name, duration}) => {
    const dispatch = useDispatch();
    const deletActivity = () => {
        dispatch({
            type: "DELETE_ACTIVITY",
            payload: {
                id:id,
            },
        });
    };
    return (
        <div className="section">
          <p>
            <b>Activity:</b>
            {name}, <b>Duration:</b>
            {duration}
            <button onClick={deletActivity}>Delete</button>
          </p>
        </div>
      );
}

export default Activity;