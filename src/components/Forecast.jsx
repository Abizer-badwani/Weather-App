import React from 'react'

const Forecast = ({data}) => {
  return (
      <div className='section-2'>

          {
              data.map(( item, ind) => {
                  let day = item.dt_txt
                  return (
                      <article key={ind}>
                          <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" />
                          <div className='day__'>{new Date(day).toLocaleDateString('en-US', {'weekday': 'long'})}</div>
                          <p>+{item?.main?.temp}°C</p>
                      </article>
                  )
              })
              
        }  

    </div>
  )
}

export default Forecast