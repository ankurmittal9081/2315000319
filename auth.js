const axios = require("axios");

async function getToken() {
    try {
        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/auth",
            {
                email: "ankur.mittal_cs23@gla.ac.in",
                name: "ankur mittal",
                rollNo: "2315000319",
                mobileNo: "9461792651",
                accessCode: "RPsgYt",
                clientID: "40fc436f-b059-4588-ae29-3df0e8a1eb2a",
                clientSecret: "CVEGzhCqZnPBYhfb"
            }
        );

        console.log(response.data);

    } catch (error) {
        console.log(error.response?.data || error.message);
    }
}

getToken();
