import PricingItem from "./PricingItem";

const PRICING_DATA = [
  {
    id: "p1",
    heading: "Lorem Ipsum",
    price: "30$",
    description:
      "The best machine learning coding questionsThe best machine learning design questionsAn exhaustive course on machine learningA series on large-scale machine learningA glossary of machine learning termsComprehensive video explanationsUnlockable certificate of success.A timed machine learning quizBonus behavioral interview content ",
  },
  {
    id: "p1",
    heading: "Lorem Ipsum",
    price: "30$",
    description:
      "The best machine learning coding questionsThe best machine learning design questionsAn exhaustive course on machine learningA series on large-scale machine learningA glossary of machine learning termsComprehensive video explanationsUnlockable certificate of success.A timed machine learning quizBonus behavioral interview content ",
  },
  {
    id: "p1",
    heading: "Lorem Ipsum",
    price: "30$",
    description:
      "The best machine learning coding questionsThe best machine learning design questionsAn exhaustive course on machine learningA series on large-scale machine learningA glossary of machine learning termsComprehensive video explanationsUnlockable certificate of success.A timed machine learning quizBonus behavioral interview content ",
  },
];

const PricingList = () => {
  return PRICING_DATA.map((item) => (
    <PricingItem
      id={item.id}
      heading={item.heading}
      price={item.price}
      description={item.description}
    />
  ));
};

export default PricingList;
