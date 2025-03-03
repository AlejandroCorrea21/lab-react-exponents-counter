const ExponentTwo = (props) => {

  let num = props.count;
  let result = num ** 2;

  return (

    <div className="exponent-counter-container">
      <p className="exponent-label">{props.count}²</p>
      <p className="exponent-result">
        {props.count} * {props.count} = <span className="total">{result}</span>
      </p>
    </div>

  );
};

export default ExponentTwo;