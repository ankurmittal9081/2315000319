import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    loadNotifications();
  }, [type]);

  const loadNotifications = async () => {
    const data = await getNotifications(type);
    setNotifications(data);
  };

  return (
    <div>
      <h1>All Notifications</h1>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">All</option>
        <option value="Event">Event</option>
        <option value="Result">Result</option>
        <option value="Placement">Placement</option>
      </select>

      <br />
      <br />

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

export default AllNotifications;