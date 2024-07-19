import { useState } from "react";
import Form from "./components/Form";
import ProductTable from "./components/ProductTable";
import OrderDetails from "./components/OrderDetails";
import OrdersByClient from "./components/OrdersByClient";
import "./App.css";

function App() {
  const [orders, setOrder] = useState([]);

  const handleSendOrder = async ({ clientId, productId, paymentMethodId }) => {
    const payload = {
      clientId: parseInt(clientId),
      productId: parseInt(productId),
      paymentMethodId: parseInt(paymentMethodId),
    };

    await fetch("http://localhost:3000/api/orders", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setOrder(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="container pt-5">
        <section className="row">
          <h1 className="text-center">Tela de venda</h1>
          <div className="col-lg-8 p-2">
            <Form onClick={handleSendOrder} />
            {orders.hasOwnProperty("error") && <span>{orders.error}</span>}
            {orders.hasOwnProperty("id") && <ProductTable product={orders} />}
          </div>
          <div className="col-lg-4">
            <h3>Último Pedido</h3>
            {orders.hasOwnProperty("id") && <OrderDetails order={orders} />}
          </div>
        </section>

        <section>
          <h2>Pedidos por cliente</h2>
          <OrdersByClient />
        </section>
      </div>
    </>
  );
}

export default App;
