const OrderDetail = ({ order }) => {
  let client = null;
  let product = null;
  let paymentMethod = null;

  if (order.length !== 0 && !order.hasOwnProperty("error")) {
    client = order.client;
    product = order.product.updatedProduct;
    paymentMethod = order.paymentMethod;
  }

  return (
    <>
      {order.length === 0 || order.hasOwnProperty("error") ? (
        <span>{order.error}</span>
      ) : (
        <div className="order-details">
          <span>
            <b>Pedido: #{order.id}</b>
          </span>
          <span>Cliente: {client.name}</span>
          <span>Produto: {product.title}</span>
          <span>Quantidade: 1</span>
          <span>Quantidade restante: {product.quantity}</span>
          <span>Valor unitário: ${product.price}</span>
          <span>Método de pagamento: {paymentMethod.title}</span>
          <span>
            Parcelas: {paymentMethod.installments}x ${order.total}
          </span>
        </div>
      )}
    </>
  );
};

export default OrderDetail;
