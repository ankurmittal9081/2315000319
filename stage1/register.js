const axios = require("axios");

async function register() {
    try {
        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/register",
            {
                email: "ankur.mittal_cs23@gla.ac.in",
                name: "ankur mittal",
                mobileNo: "9461792651",
                githubUsername: "ankurmittal9081",
                rollNo: "2315000319",
                accessCode: "RPsgYt"
            }
        );

        console.log(response.data);

    } catch (error) {
    console.log("STATUS:", error.response?.status);
    console.log("DATA:", error.response?.data);
    console.log("MESSAGE:", error.message);
}
}

register();