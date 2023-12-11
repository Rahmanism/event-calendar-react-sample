import { useMemo } from 'react'
import clsx from 'clsx'
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isToday,
  startOfMonth,
} from 'date-fns'

interface Event {
  date: Date
  title: string
}

interface EventCalendarProps {
  events: Event[]
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const EventCalednar = ({ events }: EventCalendarProps) => {
  const currentDate = new Date()
  const firstDayOfMonth = startOfMonth(currentDate)
  const lastDayOfMonth = endOfMonth(currentDate)

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  })

  const startingDayIndex = getDay(firstDayOfMonth)

  const eventsByDate = useMemo(
    () =>
      events.reduce((acc: { [key: string]: Event[] }, event) => {
        const dateKey = format(event.date, 'yyyy-MM-dd')
        if (!acc[dateKey]) {
          acc[dateKey] = []
        }
        acc[dateKey].push(event)
        return acc
      }, {}),
    [events]
  )

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-center">{format(currentDate, 'MMMM yyyy')}</h2>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {WEEKDAYS.map(day => (
          <div key={day} className="font-bold text-center">
            {day}
          </div>
        ))}
        {Array.from({ length: startingDayIndex }).map((_, index) => (
          <div
            key={`empty-${index}`}
            className="text-center border rounded-md p-2"
          ></div>
        ))}
        {daysInMonth.map((day, index) => {
          const dateKey = format(day, 'yyyy-MM-dd')
          const todaysEvents = eventsByDate[dateKey] || []
          return (
            <div
              key={index}
              className={clsx('text-center border rounded-md p-2', {
                'bg-gray-900 text-gray-200 font-bold': isToday(day),
              })}
            >
              {format(day, 'd')}
              {todaysEvents.map(event => (
                <div key={event.title} className='bg-green-300 text-gray-900 p-1 rounded-md'>{event.title}</div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EventCalednar
