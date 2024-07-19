import useFetchData from "../hooks/useFetchData";

const Form = ({ onClick }) => {
  const clients = useFetchData("clients");
  const products = useFetchData("products");
  const paymentMethods = useFetchData("payment-methods");

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    onClick(payload);
  };

  return (
    <>
      <form
        onSubmit={submitForm}
        className="row row-cols-lg-auto g-3 align-items-end mb-3"
      >
        <div>
          <label htmlFor="clientId" className="form-label">
            Cliente
          </label>
          <select name="clientId" id="clientId" className="form-select">
            {clients.map((client) => (
              <option value={client.id} key={client.id}>
                {client.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="productId" className="form-label">
            Produto
          </label>
          <select name="productId" id="productId" className="form-select">
            {products.map((product) => (
              <option value={product.id} key={product.id}>
                {product.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="paymentMethodId" className="form-label">
            Método de pagamento
          </label>
          <select
            name="paymentMethodId"
            id="paymentMethodId"
            className="form-select"
          >
            {paymentMethods.map((paymentMethod) => (
              <option value={paymentMethod.id} key={paymentMethod.id}>
                {paymentMethod.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Fazer pedido
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
