import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

function Adduser() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const formSubmit = (e) => {
    dispatch(addUser(e, setLoading, navigate));
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="user"
        noValidate
        autoComplete="false"
      >
        <div className="row">
          <div className="col-md  -6">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-user"
                placeholder="Name..."
                {...register("name")}
              />
              <p className="text-danger">{errors?.name?.message}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-user"
                placeholder="Email..."
                {...register("email")}
              />
              <p className="text-danger">{errors?.email?.message}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-user"
                placeholder="Password..."
                {...register("password")}
              />
              <p className="text-danger">{errors?.password?.message}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 offset-md-3">
          <button type="submit" className="btn btn-primary btn-user btn-block">
            Add User
          </button>
        </div>
        <hr />
      </form>
    </div>
  );
}

export default Adduser;

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("This Field is Required"),
  password: yup
    .string()
    .required("This Field is Required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      "Please provide a valid Password."
    ),
});
