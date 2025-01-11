import { FaStar } from "react-icons/fa6";

const Feedback = (props) => {
  return (
    <div className="feedback_container">
      <div className="feedback_user_profile">
        <img src={require("../assets/img/profile_image.jpg")} alt="" />
        <h4>{props?.username}</h4>
      </div>
      <div className="feedback_star">
        {Array.from({ length: props?.starNo }, (_, ind) => ind + 1).map(
          (el) => (
            <FaStar key={el} className="yellow_star" />
          )
        )}
        {Array.from({ length: 5 - props?.starNo }, (_, ind) => ind + 1).map(
          (el) => (
            <FaStar key={el} className="white_star" />
          )
        )}
      </div>
      <p className="feedback_content">{props?.content}</p>
    </div>
  );
};

export default Feedback;
