import Card from "../UI/Card";

const PricingItem = (props) => {
  return (
    <Card>
      <div>{props.heading}</div>
      <h2>{props.price}</h2>
      <p>{props.description}</p>
      <button>Add</button>
    </Card>
  );
};

export default PricingItem;
