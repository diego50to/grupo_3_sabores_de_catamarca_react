/* eslint-disable react/prop-types */
function TotalCard(props) {
  return (
    <>
      <div className="overview_card">
        <div className="topcard">
          <div className="overview_card-info">{props.titulo}</div>
          <div className="overview_card-icon">
            <i className={`fas ${props.icono} fa-2x text-gray-300`}></i>
          </div>
        </div>
        <div className="numbercard">{props.cifra}</div>
      </div>
    </>
  );
}

export default TotalCard;
