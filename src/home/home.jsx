import './home.css'
import { Template } from "../template/template"

export const Home = () => {
    return (
        <>
            <Template props={{
                heading: 'Your Greeting Here'
            }}>
                <div className={'TopContent'}>
                    <span>Your text here</span>
                </div>
                <div>
                    <h4>Our Opening Hours</h4>
                    <OpeningHoursSection props={{
                        days: 'Monday - Thursday',
                        hours: '12:00 - 15:00 (Lunch Service)'
                    }} />
                    <OpeningHoursSection props={{
                        days: 'Friday - Saturday',
                        hours: '12:00 - 15:00 (Lunch Service) 18:30 - 21:30 (Evening Service)'
                    }} />
                    <OpeningHoursSection props={{
                        days: 'Sunday',
                        hours: '18:30 PM - 21:00 PM (Evening Service)'
                    }} />
                </div>
            </Template>
        </>
    )
}

const OpeningHoursSection = ({props}) => {
    const {
        days,
        hours
    } = props

    return (
        <>
            <div className={'OpeningHoursSection'}>
                <span className={'Top'}>{days}</span>
                <span className={'Bottom'}>{hours}</span>
            </div>
        </>
    )
}