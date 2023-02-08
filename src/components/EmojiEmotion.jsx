import PropTypes from "prop-types";

function EmojiEmotion({ rangeValue }) {
  const emojis = ["😞", "😐", "😃"];
  return <div className=" m-6 text-9xl">{emojis[rangeValue]}</div>;
}

EmojiEmotion.propTypes = {
  rangeValue: PropTypes.string.isRequired,
};

export default EmojiEmotion;
