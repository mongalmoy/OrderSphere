import "./TotalItem.css";
import { BsBagPlusFill } from "react-icons/bs";
import { VscTriangleUp } from "react-icons/vsc";

const TotalItem = () => {
  return (
    <div className="total_item">
      <div>
        <div className="plus_bag_container">
          <BsBagPlusFill />
        </div>
        <p>Total Orders</p>
      </div>
      <div className="total_item_footer">
        <h5>70</h5>
        <div>
          <span>
            <VscTriangleUp />
          </span>
          <span>3%</span>
        </div>
      </div>
    </div>
  );
};

export default TotalItem;
