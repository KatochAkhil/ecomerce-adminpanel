import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../redux/actions";
import Modal from "../../components/modal";

function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.data.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="container-fluid">
      <div className="add_products_btn">
        <div>
          <h1 className="h3 mb-2 text-gray-800">Products</h1>
          <p className="mb-4">
            This Table contains all the Products added from Website
          </p>
        </div>
        <button
          onClick={() => navigate("/products/add")}
          className="d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          Add Product
        </button>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {products?.rows?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>{item.stock}</td>
                    <td>{item.createdAt}</td>
                    <td>
                      <button onClick={() => navigate(`/product/${item.id}`)}>
                        Edit
                      </button>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
}

export default Products;
