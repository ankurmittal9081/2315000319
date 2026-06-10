import axios from "axios";

export const getNotifications = async () => {
  try {
    const response = await axios.get(
      "/evaluation-service/notifications",
      {
        headers: {
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhbmt1ci5taXR0YWxfY3MyM0BnbGEuYWMuaW4iLCJleHAiOjE3ODEwNzk0NTAsImlhdCI6MTc4MTA3ODU1MCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImJmYjJmYmRhLTk4MWItNDg0OC05OTE2LTQwMjZhZDNiMzFkNyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImFua3VyIG1pdHRhbCIsInN1YiI6IjQwZmM0MzZmLWIwNTktNDU4OC1hZTI5LTNkZjBlOGExZWIyYSJ9LCJlbWFpbCI6ImFua3VyLm1pdHRhbF9jczIzQGdsYS5hYy5pbiIsIm5hbWUiOiJhbmt1ciBtaXR0YWwiLCJyb2xsTm8iOiIyMzE1MDAwMzE5IiwiYWNjZXNzQ29kZSI6IlJQc2dZdCIsImNsaWVudElEIjoiNDBmYzQzNmYtYjA1OS00NTg4LWFlMjktM2RmMGU4YTFlYjJhIiwiY2xpZW50U2VjcmV0IjoiQ1ZFR3poQ3FablBCWWhmYiJ9.k6VO-S66fvJb4ikdFJbSHi6Ndgqs-vARVvgiNWhBekg"
        }
      }
    );

    return response.data.notifications || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};