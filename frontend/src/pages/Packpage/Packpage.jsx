import Weather from "../../components/Weather/Weather";
import "./Packpage.css";
import SuitcaseCard from "../../components/SuitcaseCard/SuitcaseCard";

export default function Packpage() {
  return (
    <div className="main">
      <h1>Welcome to Packingpage</h1>
      <Weather />
      <SuitcaseCard />
    </div>
  );
}
