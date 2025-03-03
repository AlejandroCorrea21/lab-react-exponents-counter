const Exponent = ({ count, exponent }) => {

    let numero = count;
    let resultado = numero ** exponent;

    return (
        <div className="exponent-counter-container">
            <p className="exponent-label">{count}²</p>
            <p className="exponent-result">
                {count} * {count} = <span className="total">{resultado}</span>
            </p>
        </div>
    );
};

export default Exponent;
