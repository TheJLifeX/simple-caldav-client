# Simple Caldav Client

Simple Caldav Client is a easy way to connect to a caldav server([owncloud](https://ocloud.de/owncloud.html), [nextcloud](https://nextcloud.com/), ...). It is the typescript implementation of [this document](http://sabre.io/dav/building-a-caldav-client/)
 that explain how to build a CalDAV client. The document is language-agnostic, and considering the massive scope of CalDAV, not complete.

You need only:
  - username
  - password.
  - calendarUrl

## Get a demo owncloud account [here](https://ocloud.de/owncloud.html)!
  - Create some Events.
  - Get this events from your Simple Caldav Client in the next step  ↓ .
## Example Usage
```ts
const startDate = new Date('December 17, 2018 03:24:00');
const calendarUrl = 'https://owncloud10.ocloud.de/remote.php/dav/calendars/admin/personal/';
const username = 'admin';
const password = 'demo123';

const calendarClient = new CalendarClient(calendarUrl, username, password);

calendarClient.getEvents(startDate).then((calendarEvents) => {
    console.log(calendarEvents);
}, (error) => {
    console.error(error);
});
```
## API
- **CalendarEvent**
```ts
export interface CalendarEvent {
    /**
     * unique ID of the event, needs to be unique and can be used to edit the event in the future
     * EXAMPLE: "eventid01"
     */
    uid: string;

    /**
     * The title of the event
     */
    summary: string;

    /**
     * Description of the event, optional.
     */
    description?: string;

    /**
     * Location of the event, optional.
     */
    location?: string;

    /**
     * Any timeformat handled by moment.js
     * EXAMPLE: new Date('Juni 20, 2019 11:24:00')
     */
    startDate: Date;

    /**
     * Any timeformat handled by moment.js
     * EXAMPLE: new Date('Juni 20, 2019 14:24:00')
     */
    endDate: Date;

    /**
     * time zone in the format
     * EXAMPLE: "Europe/Berlin"
     */
    tzid: string;

    /**
     * specify allDayEvent (no time just date) / note no timezone for allDayEvents
     */
    allDayEvent: boolean;

    /**
     * The source iCalendar data for this event.
     */
    iCalendarData: string;

    duration?: CalendarEventDuration;

    organizer?: string;

    attendees?: string[] | string[][];

    recurrenceId?: number;
}
```
### Installation

Simple Caldav Client requires [Node.js](https://nodejs.org/) to run.

**Clone this project.**
```sh
$ git clone https://github.com/TheJLifeX/simple-caldav-client.git
$ cd simple-caldav-client
```

**Install the dependencies and devDependencies**.
```sh
$ npm install
```
**Start the server**.
```sh
$ npm run serve
```

### Tech

Simple Caldav Client uses a number of open source projects to work properly:
 - dependencies
    - [expressjs](https://expressjs.com) Fast, unopinionated, minimalist web framework for Node.js
    - [ical.js](https://github.com/mozilla-comm/ical.js/) Javascript parser for calendar and vcard data. 
    - [moment](https://momentjs.com/) Parse, validate, manipulate, and display dates and times in JavaScript.
    - [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) XML to JavaScript object converter.
 - devDependencies
    - [typescript](https://www.typescriptlang.org/) typescript is a typed javascript
    - [@types/node](https://www.npmjs.com/package/@types/node) typescript types for nodejs


### Todos

 - Get all calendar urls of a given user.

License
----

MIT

