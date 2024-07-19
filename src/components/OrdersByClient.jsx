import { useState, useEffect } from "react";
import useFetchData from "../hooks/useFetchData";
import OrdersByClientTable from "./OrdersByClientTable";

const OrdersByClient = () => {
  const [currSelected, setSelected] = useState("");
  const [clientOrdersEndpoint, setClientOrdersEndpoint] = useState("");

  const clients = useFetchData("clients");
  const orders = useFetchData(clientOrdersEndpoint);

  useEffect(() => {
    if (currSelected) {
      setClientOrdersEndpoint(`orders/${currSelected}`);
    }
  }, [currSelected]);

  return (
    <>
      <div>
        <label htmlFor="clientId" className="form-label">
          Cliente
        </label>
        <select
          value={currSelected}
          className="form-select"
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="" disabled>
            Selecione um cliente
          </option>
          {clients.map((client) => (
            <option value={client.id} key={client.id}>
              {client.name}
            </option>
          ))}
        </select>
      </div>

      {orders && !orders.hasOwnProperty("error") ? (
        <OrdersByClientTable orders={orders} />
      ) : (
        <div className="mt-2">{orders.error}</div>
      )}
    </>
  );
};

export default OrdersByClient;
