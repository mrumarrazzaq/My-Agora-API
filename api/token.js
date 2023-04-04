const express = require("express");
const router = express.Router();
const { RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole } = require('agora-access-token')

// Endpoint to generate an Agora token
router.get("/", (req, res) => {
    try {
        // const { appId, appCertificate, channelName, uid } = req.query;
        // console.log(appId);
        // console.log(appCertificate);
        // console.log(channelName);
        // console.log(uid);

        const appId = "8c8b691ac63e49baa675335905114819";
        const appCertificate = "689af7973c6740a69b813542af2c15b1";
        const channelName = "video-call";
        const uid = 0;
        const role = RtcRole.PUBLISHER;
        const expirationTimeInSeconds = 3600;
        const currentTimestamp = Math.floor(Date.now() / 1000);
        const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
        // Build token with uid
        const token = RtcTokenBuilder.buildTokenWithUid(
            appId,
            appCertificate,
            channelName,
            uid,
            role,
            privilegeExpiredTs
        );
        // console.log("Token with integer number Uid: " + token);

        // Return the token as the response
        res.send(token);
    }
    catch (e) {
        res.status(500).send("Server error.")
    }
});

module.exports = router;