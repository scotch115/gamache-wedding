import React from 'react';
import '../App.css';
import Footer from './Models/Footer';
import Header from './Models/Header';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export const Schedule = () => {
    return ( 
        <div>          
            <div style={{backgroundColor: "#153630", color: "white", textAlign: "center", paddingTop: "2vh", paddingBottom: "1vh"}}>
                <Header />
            </div>
            <div
                style={{
                    position: 'relative',
                    left: '5%',
                    width: "90vw",
                    height: "100%",
                }}
                >
                <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                    events={[
                        { title: 'Bridal Party and Guests Arrives', date: '2022-07-10' },
                        { title: 'Rehearsal Dinner', date: '2022-07-11' },
                        { title: 'Fun Group Activity #1', date: '2022-07-11' },
                        { title: 'Wedding! <3', date: '2022-07-12'},
                        { title: 'Fun Group Activity #2', date: '2022-07-13'},
                        { title: 'Lunch', date: '2022-07-13'},
                    ]}
                />
            </div>
            <div style={{height: "50vmin"}}></div>
            <Footer />
        </div>
      );
};
 
export default Schedule;