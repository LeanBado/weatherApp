import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
import './forecast.css'
const week_days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

export const Forecast = ({dataForecast}) => {
    const today = new Date().getDay();
  const resultArrayDays = week_days.slice(today, week_days.length).concat(week_days.slice(0, today));
  return (
    <>
        <label className="title">Daily</label>
        <Accordion allowZeroExpanded>
        {dataForecast.list.slice(0,7).map((item,index)=>(
            <AccordionItem key={index}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <div className="daily-item">
                            <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}></img>
                            <label className="day">{resultArrayDays[index]}</label>
                            <label className="description">{item.weather[0].description}</label>
                            <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>

                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label>{Math.ceil(item.wind.speed)} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label>{Math.ceil(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
            </AccordionItem>
        ))}

        </Accordion>
    </>
  )
}
