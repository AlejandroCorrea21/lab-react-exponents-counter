const ExponentFive = (props) => {

  let num = props.count;
  let result = num ** 5;

  return (

    <div className="exponent-counter-container">
      <p className="exponent-label">{props.count}⁵</p>
      <p className="exponent-result">
        {props.count} * {props.count} * {props.count} * {props.count} * {props.count} = <span className="total">{result}</span>
      </p>
    </div>

  );
};

export default ExponentFive;