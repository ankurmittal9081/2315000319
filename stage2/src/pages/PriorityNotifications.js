import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";

function getWeight(type) {
  if (type === "Placement") return 3;
  if (type === "Result") return 2;
  return 1;
}

function calculateScore(notification) {
  return (
    getWeight(notification.Type) * 1000000000000 +
    new Date(notification.Timestamp).getTime()
  );
}

function PriorityNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    const data = await getNotifications();

    const sorted = [...data]
      .sort(
        (a, b) =>
          calculateScore(b) -
          calculateScore(a)
      )
      .slice(0, 10);

    setNotifications(sorted);
  };

  return (
    <div>
      <h1>Top 10 Priority Notifications</h1>

      {notifications.map((item) => (
        <div key={item.ID}>
          <h3>{item.Type}</h3>
          <p>{item.Message}</p>
          <p>{item.Timestamp}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PriorityNotifications;