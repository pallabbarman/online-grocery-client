import React from "react";

const OrderDetails = (props) => {
    const { order } = props;
    const { name, wight, price, orderTime } = order;
    console.log("ordering", order);
    return (
        <div className="d-flex justify-content-between">
            <p>{name}</p>
            <p>{price}</p>
            <p>{wight || 0}</p>
            <p>{new Date(orderTime).toDateString("dd/MM/yyyy")}</p>
        </div>
    );
};

export default OrderDetails;
