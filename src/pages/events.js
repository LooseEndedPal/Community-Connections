function Events() {
    return (
        <div>
            <div class="genHelp">
                <h1>Leader Events</h1>
                
                <button>Create event</button>
                
                
                <center>
                    <EventComponent name = "Charles Birthday Party" host = "Charles" date = "July 4"/>
                    <EventComponent  name = "Kylie's Morning Yoga" host = "Kylie" date = "April 18 "/>
                </center>

                <h1>Cultural Events</h1>
                <center>
                    <EventComponent name = "Black History Month"  date = "September - October"/>
                </center>
                
            </div>


            <br />

            <div class="genHelp">
                <center>

                </center>
            </div>
        </div >
    );
}

function EventComponent(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <h3>{props.host}</h3>
            <h3>{props.date}</h3>
            <button>RSVP</button>
        </div>
    );
}

export default Events;