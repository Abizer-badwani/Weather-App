import React from 'react'
import image from '../images/cloudy-day.png'
import humidity from '../images/humidity.png'
import wind from '../images/wind.png'
import pressure from '../images/pressure-gauge.png'

const Weather = ({data}) => {
    return (
        <div className='section-1'>
            <div className='block block-1'>

                <h2 className="city">{data.city ? (data?.city + (data?.country ? ', ' + data?.country : "")) : '- - -'}</h2>
                <p className='day'>{new Date().toLocaleDateString('en-US', {'weekday': 'long'})}</p>
                <div className="details">
                    <p className="detail humidity"><img className='icons' src={humidity} alt="" />{data?.humidity}%</p>
                    <p className="detail wind"><img className='icons' src={wind} alt="" />{data?.wind} m/s</p>
                    <p className="detail pressure"><img className='icons' src={pressure} alt="" />{data?.pressure} hPa</p>
                </div>
            </div>
                <div className="second-block">
            <div className='block block-2'>
                <img src={image} />
            </div>
            <div className='block block-3'>
                <div className="temperature">+{Math.round(data?.temp)}°C</div>
            </div>
                </div>
        </div>
    )
}

export default Weather