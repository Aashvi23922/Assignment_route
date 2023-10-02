import "./Rings_data_card.css"

function Rings_data_card({ data }) {
  return (
    <>
      <div className="card_return">
        <div className="disp_img">
          <div className="card_return_style">
            <img src={data?.img} alt="" />
          </div>
        </div>
        <div className='card_text'>
          <h4>{data?.name}</h4>
          <h2>{data?.Price}₹</h2>
        </div>
      </div>
    </>
  );
}

export default Rings_data_card;