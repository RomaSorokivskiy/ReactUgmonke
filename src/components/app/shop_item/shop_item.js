export default function Shop_item(props){

    return(
        <div className="shop_item">
            <img src={props.img} alt="item"/>
            <h4>{props.name} <p>{props.descr}</p></h4>
            <h5>{props.price}<p>{props.sale}</p></h5>
        </div>
    )
}
