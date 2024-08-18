import React from 'react'

const UpcomingEventsPage = () => {
  const eventCards = [
    {
      imageSrc: "/assets/events/Event1.png",
      title: "Event Title 1",
      desc: "Event Desc 1"
    },
    {
      imageSrc: "/assets/events/Event2.png",
      title: "Event Title 2",
      desc: "Event Desc 2"
    },
    {
      imageSrc: "/assets/events/Event3.png",
      title: "Event Title 3",
      desc: "Event Desc 3"
    }
  ];

  return (
    <div id='Events' className='events-page min-h-screen pt-10 pb-96'>
      <h1 className='text-3xl sm:text-5xl lg:text-6xl uppercase w-fit mx-auto p-5 lg:p-10 rounded-[50px] bg-white shadow-lg'>Upcoming Events</h1>
      <div className="event-card-container flex flex-col md:flex-row px-5 lg:px-32 py-20 gap-[25rem] md:gap-20 justify-center">
        {eventCards.map((event, index) => (
          <div key={index} className="event-card relative md:w-full">
            <div className="event-image w-full h-full rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover object-center z-10"
                src={event.imageSrc}
                alt={`Event ${index + 1}`}
              />
            </div>
            <div className="event-desc overflow-hidden rounded-lg absolute w-[90%] cursor-pointer bg-white shadow-lg left-1/2 transform -translate-x-1/2 text-center -mt-5 p-10 transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <div className="event-text relative z-10">
                <h3 className="text-xl">{event.title}</h3>
                <h4 className="text-md font-light">{event.desc}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpcomingEventsPage