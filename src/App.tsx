import EventCalednar from './EventCalendar'
import { addDays, subDays } from 'date-fns'
import 'tailwindcss/base.css'

function App() {
  return (
    <div>
      <p className="text-3xl font-bold underline text-center">Hello world!</p>
      <div className="">
        <EventCalednar
          events={[
            { date: subDays(new Date(), 6), title: 'Post Video' },
            { date: subDays(new Date(), 1), title: 'Edit Video' },
            { date: addDays(new Date(), 3), title: 'Code' },
          ]}
        />
      </div>
    </div>
  )
}

export default App
