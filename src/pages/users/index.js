import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../redux/actions";
import Modal from "../../components/modal";

function Users() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.data.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="container-fluid">
      <div className="add_products_btn">
        <div>
          <h1 className="h3 mb-2 text-gray-800">Users</h1>
          <p className="mb-4">
            This Table contains all the Users added from Website
          </p>
        </div>
        <button
          onClick={() => navigate("/users/add")}
          className="d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          Add User
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
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {users?.rows?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      <button onClick={() => navigate(`/user/${item.id}`)}>
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

export default Users;
