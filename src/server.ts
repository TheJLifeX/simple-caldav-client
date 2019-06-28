import express from 'express';
import { CalendarClient } from './calendar-client';


const app = express();
const port = 3000;

const startDate = new Date('December 17, 2018 03:24:00');
const calendarUrl = 'https://owncloud10.ocloud.de/remote.php/dav/calendars/admin/personal/';
const username = 'admin';
const password = 'demo123';

const calendarClient = new CalendarClient(calendarUrl, username, password);

calendarClient.getEvents(startDate).then((response) => {
    console.log(response);
}, (error) => {
    console.error(error);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
module.exports = app;