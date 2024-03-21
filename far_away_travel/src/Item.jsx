/* eslint-disable react/prop-types */
const Item = ({ item }) => {
  return (
    <li>
      <span>
        {item.quantity} {item.description}
      </span>
      <button>X</button>
    </li>
  );
};

export default Item;
