import "./TotalItem.css";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

const TotalItem = ({ icon, color, bgColor, type, count, gain, percentage }) => {
  return (
    <div className="total_item">
      <div>
        <div
          className="plus_bag_container"
          style={{ backgroundColor: bgColor }}
        >
          {icon}
        </div>
        <p className="grey_color_text">{type}</p>
      </div>
      <div className="total_item_footer">
        <h5>{(count + "").padStart(2, "0")}</h5>
        <div className={gain === "P" ? "green" : "red"}>
          <span>{gain === "P" ? <VscTriangleUp /> : <VscTriangleDown />}</span>
          <span>{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default TotalItem;
