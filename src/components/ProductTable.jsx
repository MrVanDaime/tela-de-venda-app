const ProductTable = ({ product }) => {
  let item = null;

  if (product.length !== 0 && !product.hasOwnProperty("error")) {
    item = product.product.updatedProduct;
  }

  return (
    <>
      {product.length === 0 || product.hasOwnProperty("error") ? (
        <span>{product.error}</span>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Valor ($)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>1</td>
                <td>{item.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ProductTable;
