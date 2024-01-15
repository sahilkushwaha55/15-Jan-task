import React from 'react'

const Task = ({ date, timeZone }) => {
  const currentDate = Math.floor(new Date().getTime() / 1000)
  const dateFormat = new Intl.DateTimeFormat('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })

  const data = timeZone.filter(x => x.Date === dateFormat.format(date))

  const showData = data.map(x => {
    let hour = x.Time.slice(0,2)
    const ampm = hour > 11 ? 'PM' : "AM"
    if(hour < 10) hour = hour.slice(1)
    else if(hour > 12) hour -= 12 
    return (<div className='task__check' key={x.Id}>
      <input type='checkbox' id={x.Id} />
      <label htmlFor={x.Id}>{`${hour}${x.Time.slice(2)} ${ampm}`}</label>
    </div>)
  })

  return (
    <div className='task__row'>
      <div className='task__date'>
        <p className='task__day'>{new Intl.DateTimeFormat('en', { weekday: 'short' }).format(date)}</p>
        <p>{new Intl.DateTimeFormat('en', { month: 'numeric', day: '2-digit' }).format(date)}</p>
      </div>
      <div className='task__list'>{currentDate > date.getTime() / 1000
        ? "Past"
        : showData.length ? showData : "No Data"}
      </div>
    </div>
  )
}

export default Task