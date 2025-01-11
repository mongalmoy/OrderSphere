import { VscTriangleUp } from "react-icons/vsc";

const NetProfit = () => {
  return (
    <div className="net_profit">
      <div>
        <p>Net profit</p>
        <h3>$ 6789.23</h3>
        <div>
          <span>
            <VscTriangleUp />
          </span>
          <span>3%</span>
        </div>
      </div>
      <div className="profit_progress_bar">
        <div className="progress_bar inner"></div>
        <div className="progress_bar outer"></div>
        <div className="progress_bar progress_content">
          70%
        </div>
      </div>
    </div>
  );
};

export default NetProfit;