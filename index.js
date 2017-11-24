const Keen = require('keen-tracking');
const keenConfig = require('../keen-config.json');

let keenApiClient = new Keen({
    projectId: keenConfig.projectId, // String (required always)
    writeKey: keenConfig.writeKey,   // String (required for sending data)
    readKey: keenConfig.readKey      // String (required for querying data)
});

const screenProfile = Keen.helpers.getScreenProfile();
const windowProfile = Keen.helpers.getScreenProfile();
const browserProfile = Keen.helpers.getBrowserProfile();

const keenDefaultProperties =
    {
        href: document.location.href,
        screenProfile,
        windowProfile,
        browserProfile
    };

keenApiClient.extendEvents({ keenDefaultProperties });

export default keenApiClient;





