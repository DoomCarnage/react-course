import { useContext } from 'react';
import { UserContext } from './TimeInfoContext';
import React from 'react'

const TimeInfo = () => {
    const Timer = useContext(UserContext);
  return (
    <div>
      {Timer}
    </div>
  )
}

export default TimeInfo
