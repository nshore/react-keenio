
##React Keenio Simple

A ligghtweight wrapper around the Keenio javascript package that enables functionality through config

First create a new Keen.IO project at https://keen.io/

In your React/Javascript project import this package into your app.

Create a "keen-config.json" at your project root with your Keen project details.  This is where the package will look for your Keen configuration.  For example...

```json
{
     "projectId": "5a16b0b6c9e77c00010998e3",
     "writeKey": "04C0F983D4E8A244B9ED2B1EA6EEE51C290AF63387A997ABB4DD6EA090A7FC6473F9A67DFCDC274592209A2E7F5713D317DA6EE41FE184833A2D7201768652B9C222E8681C611C2E311BB1F7B74660E86789DD6FB67D5874662A2FDF0D5EC441",
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