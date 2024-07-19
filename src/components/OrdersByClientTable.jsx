const OrdersByClientTable = ({ orders }) => {
  return (
    <div className="col-lg-6 table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Produto</th>
            <th>Método de pagamento</th>
            <th>Parcelas</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            let product = order.product.updatedProduct;
            let paymentMethod = order.paymentMethod;

            return (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{product.title}</td>
                <td>{order.paymentMethod.title}</td>
                <td>
                  {paymentMethod.installments}x {order.total}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersByClientTable;
