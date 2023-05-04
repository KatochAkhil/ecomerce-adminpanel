import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

function Addproduct() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const files = [
    "https://api.lorem.space/image/furniture?w=640&h=480&r=9839",
    "https://api.lorem.space/image/furniture?w=640&h=480&r=1837",
    "https://api.lorem.space/image/furniture?w=640&h=480&r=9839",
    "https://api.lorem.space/image/furniture?w=640&h=480&r=1837",
  ];

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
    // console.log(e, "formsfiles");
    // const formData = new FormData();
    // formData.append("title", e.title);
    // // for (let index = 0; index < e.image.length; index++) {
    // //   // let files = [];
    // //   // files.push(e?.image[0]);
    // //   // console.log(files, "onfiles");
    // //   // setFiles(files);
    // //   formData.append("image", e?.image[0]);
    // //   console.log(e.image[0], "ckcmkdcd");
    // // }
    // formData.append("image", files);
    // formData.append("description", e.description);
    // formData.append("sku", e.sku);
    // formData.append("price", e.price);
    // formData.append("stock", e.stock);
    // formData.append("variants", e.variants);
    // formData.append("category", e.category);
    const body = {
      title: e.title,
      description: e.description,
      image: files,
      sku: e.sku,
      price: e.price,
      stock: e.stock,
      variants: ["XL", "L", "M"],
      category: e.category,
    };
    dispatch(addProduct(body, setLoading, navigate));
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
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Title..."
                {...register("title")}
              />
              <p className="text-danger">{errors?.title?.message}</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-user"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Price..."
                {...register("price")}
              />
              <p className="text-danger">{errors?.price?.message}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="file"
                className="form-control form-control-user"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="image..."
                // {...register("image")}
                multiple
              />
              <p className="text-danger">{errors?.image?.message}</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <input
                type="sku"
                className="form-control form-control-user"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Sku..."
                {...register("sku")}
              />
              <p className="text-danger">{errors?.sku?.message}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-user"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Stock..."
                {...register("stock")}
              />
              <p className="text-danger">{errors?.stock?.message}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <select
                className="form-control form-control-user"
                placeholder="Options"
                {...register("variants")}
              >
                <option value="XL" selected>
                  XL
                </option>
                <option value="L">L</option>
                <option value="M">M</option>
              </select>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <select
                className="form-control form-control-user"
                placeholder="Options"
                {...register("category")}
              >
                <option value="category1" selected>
                  Category1
                </option>
                <option value="category2" s>
                  Category2
                </option>
                <option value="category3" selected>
                  Category3
                </option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-user"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Sku..."
                {...register("description")}
              />
              <p className="text-danger">{errors?.description?.message}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 offset-md-3">
          <button type="submit" className="btn btn-primary btn-user btn-block">
            Add product
          </button>
        </div>
        <hr />
      </form>
    </div>
  );
}

export default Addproduct;

const schema = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  sku: yup.string().required("Sku is required"),
  // image: yup
  //   .mixed()
  //   .test("name", "Please Provide a Image", (value) => {
  //     return value[0] && value[0].name !== "";
  //   })
  //   .test("fileSize", "The file is too large", (value) => {
  //     return value[0] && value[0].size <= 1000000000;
  //   }),
  price: yup.string().required("Price is required"),
  stock: yup.string().required("Stock is required"),
  variants: yup.string().required("Variants is required"),
  category: yup.string().required("Category is required"),
});
