import { format } from 'date-fns'

interface EventCalendarProps {
  date: any
  title: string
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const EventCalednar = (events: EventCalendarProps[]) => {
  const currentDate = new Date()

  return (
    <div className="container mx-auto p-4">
      <div>
        <h2 className="text-center">{format(currentDate, 'MMMM yyyy')}</h2>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {WEEKDAYS.map(day => (
          <div key={day} className="border">
            {day}
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventCalednar
