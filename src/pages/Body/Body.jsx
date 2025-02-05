import TotalItem from "../../components/TotalItem/TotalItem";
import { orders } from "../../data/recentOrder";
import "./Body.css";
import NetProfit from "../NetProfit";
import Feedback from "../Feedback";
import { feedbackData } from "../../data/feedBack";
import { BsBagPlusFill } from "react-icons/bs";

const Body = () => {
  return (
    <main className="body">
      <h1>Dashboard</h1>

      <section className="first grid_container">
        <div className="total_numbers_container">
          <TotalItem
            icon={<BsBagPlusFill />}
            color={"#0f2cb1"}
            bgColor={"#808fd4"}
            type="Total Orders"
            count={70}
            gain={"P"}
            percentage={3}
          />
          <TotalItem
            icon={<BsBagPlusFill />}
            color={"#0f2cb1"}
            bgColor={"#808fd4"}
            type="Total Delivered"
            count={70}
            gain={"N"}
            percentage={3}
          />
          <TotalItem
            icon={<BsBagPlusFill />}
            color={"#0f2cb1"}
            bgColor={"#808fd4"}
            type="Total Cancelled"
            count={5}
            gain={"P"}
            percentage={3}
          />
          <TotalItem
            icon={<BsBagPlusFill />}
            color={"#0f2cb1"}
            bgColor={"#808fd4"}
            type="Total Delivered"
            count={12000}
            countSign={"$"}
            gain={"N"}
            percentage={3}
          />
        </div>
        <NetProfit />
      </section>

      <section className="second grid_container">
        <div className="recent_orders">
          <h3>Recent Orders</h3>

          <table className="orderlist_table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Order No.</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((itemOrder, index) => {
                return (
                  <tr key={index}>
                    <td>{itemOrder.name}</td>
                    <td>{itemOrder.order_no}</td>
                    <td>{itemOrder.amount}</td>
                    <td>
                      {itemOrder.status === "D" ? (
                        <div className="delivered">Delivered</div>
                      ) : itemOrder.status === "C" ? (
                        <div className="cancelled">Cancelled</div>
                      ) : (
                        <div className="cancelled">Pending</div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="customer_feedback">
          <h3>Customer Feedback</h3>
          {feedbackData.map((el, ind) => {
            return (
              <Feedback
                key={ind}
                userImg={el.userImg}
                username={el.username}
                starNo={el.starNo}
                content={el.content}
              />
            );
          })}
        </div>
      </section>
      <section className="third grid_container"></section>
    </main>
  );
};

export default Body;
