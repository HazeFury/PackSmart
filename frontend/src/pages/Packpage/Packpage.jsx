import axios from "axios";
import { useState, useEffect } from "react";
import Weather from "../../components/Weather/Weather";
import "./Packpage.css";

export default function Packpage() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/vetements")
      .then((res) => setItems(res.data));
  }, []);

  return (
    <div className="main">
      <h1>Welcome to Packingpage</h1>
      <Weather />
      {items && <h1 className="victory">{items[0].vetements}</h1>}
    </div>
  );
}
