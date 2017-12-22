
##React Keenio Simple

A ligghtweight wrapper around the Keenio javascript package that enables functionality through config

First create a new Keen.IO project at https://keen.io/

In your React/Javascript project import this package into your app.

Create a "keen-config.json" at your project root with your Keen project details.  This is where the package will look for your Keen configuration.  For example...

```json
{
     "projectId": "PROJECTID",
     "writeKey": "WRITEKEY",
     "readKey": "",
     "browserAnalyticsEnabled": true,
     "screenAnalyticsEnabled": true,
     "windowAnalyticsEnabled": true
 }
```

Now you can use your KeenApiClient to record events from your React App.

Recording events in Keen.

```javascript 1.6
keenApiClient.recordEvent("buttonClick", {
    text: "sometext"
});
```