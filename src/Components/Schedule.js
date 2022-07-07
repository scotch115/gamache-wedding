import React, { useState } from 'react';
import '../App.css';
import Footer from './Models/Footer';
import Header from './Models/Header';

// Prime Imports
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

export const Schedule = () => {
    
    const [showDialog, setShowDialog] = useState(false);

    return (
        <>
            <div>          
                <div style={{backgroundColor: "#153630", color: "white", textAlign: "center", paddingTop: "2vh", paddingBottom: "1vh"}}>
                    <Header />
                </div>
                <div
                    style={{
                        position: 'relative',
                        left: '5%',
                        width: '90vw'
                    }}
                >
                    <FullCalendar
                        height='100vmax'
                        nowIndicator
                        th
                        plugins={[ dayGridPlugin, timeGridPlugin ]}
                        headerToolbar={{
                            start: 'title',
                            center: 'dayGridView, fourDayGrid',
                            end: 'prev,next'
                        }}
                        initialView="fourDayGrid"
                        initialDate='2022-07-10'
                        views={{
                                fourDayGrid: {
                                    type: 'timeGrid',
                                    duration: { days: 4 },
                                    buttonText: '4 Day View'
                                },
                                dayGridView: {
                                    type: 'timeGrid',
                                    duration: { days: 1},
                                    buttonText: 'Day View'
                                }
                        }}
                        eventClick={(e) => {
                            if (
                                e.el.outerText === '11:00 - 12:30\nFun Group Activity #2 (click me!)' ||
                                e.el.outerText === '11:00\nFun Group Activity #2 (click me!)'
                            ) {
                                // Download Garden of the Gods PDF trail map
                                setShowDialog(true);
                            }
                        }}
                        // like '14:30'
                        eventTimeFormat={{
                            hour: '2-digit',
                            minute: '2-digit',
                            meridiem: false
                        }}
                        events={[
                            /**
                             * Wedding Week Events
                             */
                            { title: 'Bridal Party and Guests Arrives', start: '2022-07-10T12:00:00', end: '2022-07-10T21:00:00', color: '#153630' },
                            { title: 'Rehearsal Dinner', start: '2022-07-11T18:30:00', end: '2022-07-11T21:30:00', color: '#153630'},
                            { title: 'Fun Group Activity #1', start: '2022-07-11T21:30:00', end: '2022-07-11T23:00:00', color: '#153630'},
                            { title: 'Wedding! <3', start: '2022-07-12T00:00:00', end: '2022-07-12T23:59:59', color: '#153630', textColor: 'white', display: 'background'},
                            { title: 'Breakfast', start: '2022-07-13T09:30:00', end: '2022-07-13T11:00:00', color: '#153630'},
                            { title: 'Fun Group Activity #2 (click me!)', start: '2022-07-13T11:00:00', end: '2022-07-13T13:30:00', color: '#153630'},
                            { title: 'Lunch', start: '2022-07-13T13:30:00', end: '2022-07-13T14:30:00', color: '#153630'},
                            /**
                             * Wedding Day Events
                             */
                            { title: 'Guests Arrive at Venue', start: '2022-07-12T19:00:00', end: '2022-07-12T20:00:00', color: '#c09285'},
                            { title: 'Ceremony', start: '2022-07-12T20:00:00', end: '2022-07-12T20:30:00', color: '#c09285'},
                            { title: 'Cocktail Hour', start: '2022-07-12T20:30:00', end: '2022-07-12T21:00:00', color: '#c09285'},
                            { title: 'Dinner', start: '2022-07-12T21:30:00', end: '2022-07-12T22:00:00', color: '#c09285'},
                            { title: 'Reception', start: '2022-07-12T22:45:00', end: '2022-07-12T23:59:59', color: '#c09285'},
                        ]}
                    />
                </div>
                <div style={{height: "50vmin"}}></div>
                <Footer />
            </div>
            <Dialog
                visible={showDialog}
                header="Event Details"
                resizable={false}
                draggable={false}
                focusOnShow
                onHide={() => {
                    setShowDialog(false);
                }}
                style={{ margin: '10px', textAlign: 'center' }}
            >
                <h1>
                    Hiking at Garden of the Gods:
                </h1>
                <ul>
                    <li> • Arrive at 11:00am at this <a href="https://goo.gl/maps/exscvGzkwoHHqg3U8">Parking Lot</a> </li>
                    <li> • Wear comfortable clothing and good shoes  </li>
                </ul>
                <br />
                <Button
                    icon="pi pi-download"
                    label='Download Trail Map'
                    onClick={() => {
                        window.open('data/GoG-Park-Map.pdf', 'download');
                    }}
                />
            </Dialog>
        </>
      );
};
 
export default Schedule;