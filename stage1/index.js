require("dotenv").config();

const axios = require("axios");
const log = require("./logger");

const API = process.env.API_URL;
const TOKEN = process.env.TOKEN;

// Weight according to notification type
function getWeight(type) {
    switch (type) {
        case "Placement":
            return 3;
        case "Result":
            return 2;
        case "Event":
            return 1;
        default:
            return 0;
    }
}

// Calculate priority score
function calculateScore(notification) {
    const weight = getWeight(notification.Type);
    const timestamp = new Date(notification.Timestamp).getTime();

    return (weight * 1000000000000) + timestamp;
}

// Sort and get top 10 notifications
function getTopNotifications(notifications) {
    notifications.sort((a, b) => {
        return calculateScore(b) - calculateScore(a);
    });

    return notifications.slice(0, 10);
}

// Fetch notifications from API
async function fetchNotifications() {
    try {
        log("Fetching notifications from API");

        const response = await axios.get(API, {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        });

        log("Notifications fetched successfully");

        return response.data.notifications || [];

    } catch (error) {

        log(`Error: ${error.message}`);

        console.log(
            error.response?.data || error.message
        );

        return [];
    }
}

// Main function
async function main() {
    const notifications = await fetchNotifications();

    if (notifications.length === 0) {
        console.log("No notifications found");
        return;
    }

    const topNotifications =
        getTopNotifications(notifications);

    console.log(
        "\n===== TOP 10 PRIORITY NOTIFICATIONS =====\n"
    );

    topNotifications.forEach(
        (notification, index) => {

            console.log(`${index + 1}.`);
            console.log(
                `ID: ${notification.ID}`
            );
            console.log(
                `Type: ${notification.Type}`
            );
            console.log(
                `Message: ${notification.Message}`
            );
            console.log(
                `Timestamp: ${notification.Timestamp}`
            );
            console.log(
                "-----------------------------------"
            );
        }
    );

    log(
        "Top 10 notifications generated successfully"
    );
}

main();