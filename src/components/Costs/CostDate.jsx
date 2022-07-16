import "./CostDate.css";



const CostDate = (props) => {
  const month = props.date.toLocaleString("uk-UA", { month: "long" });
  const year = props.date.toLocaleString("uk-UA", { day: "2-digit" });
  const day = props.date.getFullYear();

  return (
    <div className="cost-date">
      <div className="cost-date-month">{month}</div>
      <div className="cost-date-year">{year}</div>
      <div className="cost-date-day">{day}</div>
    </div>
  );
};

export default CostDate;