import moment from 'moment'
import { useState } from 'react'
import Task from './Task'
import { arr, arr2 } from './arrayData'

function App() {
  const [week, setWeek] = useState(0)
  const [timeZone, setTimeZone] = useState(arr)

  const date = new Date()
  const dateFormat = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
  const startDate = dateFormat.format(moment().day(week * 6 + 1 + week)._d)
  const endDate = dateFormat.format(moment().day(week * 6 + 5 + week)._d)

  function handleClick(value){
    if(value === 'inc') setWeek(week + 1)
    else setWeek( week - 1)
  }

  function handleTimeZone(e){
    if(e.target.value == 0) setTimeZone(arr)
    else setTimeZone(arr2)
  }

  return (
    <div className='container'>
      <div className='topbar'>
        <div className="topbar__left">
          <button className='btn' onClick={()=> handleClick('dec')}><span>◄</span> Previous Week</button>
          <span className='topbar__date'>{week === 0 ? dateFormat.format(date): `${startDate} - ${endDate}`}</span>
        </div>
        <div className="topbar__right">
          <button className='btn' onClick={()=> handleClick('inc')}>Next Week <span>►</span></button>
        </div>
      </div>

      <div className="timezone">
        <p>Timezone:</p>
        <select name="" id="" className='timezone__selector' onChange={handleTimeZone}>
          <option value="0">UTC - 0</option>
          <option value="2">UTC - 2</option>
        </select>
      </div>

      <div className="task_container">
        <Task date={moment().day(week * 6 + 1 + week)._d} timeZone={timeZone} />
        <Task date={moment().day(week * 6 + 2 + week)._d} timeZone={timeZone} />
        <Task date={moment().day(week * 6 + 3 + week)._d} timeZone={timeZone} />
        <Task date={moment().day(week * 6 + 4 + week)._d} timeZone={timeZone} />
        <Task date={moment().day(week * 6 + 5 + week)._d} timeZone={timeZone} />
      </div>
    </div>
  )
}

export default App
