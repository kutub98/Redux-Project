import { type } from "@testing-library/user-event/dist/type";
import ColumnGroup from "antd/es/table/ColumnGroup";
import React, { useReducer, useState } from "react";
import { initialState, reducers } from "./FormReducer";

const FormInput = () => {
  const [number, setNumber] = useState(0);

  const [state, dispatch] = useReducer(reducers, initialState);
  const DataForm = (e) => {
    e.preventDefault();
    console.log(state);
    // e.target.name.value=''
    const form = e.target;
    form.reset();
  };
  return (
    <div className="">
      <section className="p-6 bg-gray-100 text-gray-900">
        <form
          noValidate=""
          action=""
          onSubmit={DataForm}
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid my-8 w-[50%]"
        >
          <fieldset className="grid grid-cols-1 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="FirstName" className="text-sm">
                  First name
                </label>
                <input
                  id="FirstName"
                  name="FirstName"
                  required
                  type="text"
                  onBlur={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                  placeholder="First name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-gray-100 border-gray-300 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastName" className="text-sm">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="LastName"
                  required
                  type="text"
                  onBlur={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                  placeholder="Last name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-gray-100 border-gray-300 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  onBlur={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                  name="Email"
                  placeholder="Email"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-gray-100 border-gray-300 text-gray-900"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="address" className="text-sm">
                  Gender
                </label>
                <div className="flex">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Male</span>
                      <input
                        type="radio"
                        id="male"
                        required
                        name="gender"
                        value="Male"
                        onClick={(e) =>
                          dispatch({
                            type: "INPUT",
                            payload: { name: e.target.name, value: e.target.value },
                          })
                        }
                        className="radio checked:bg-blue-900"
                      />
                    </label>
                  </div>
                  <div className="form-control ml-3">
                    <label className="label cursor-pointer ml-3">
                      <span className="label-text">Female</span>
                      <input
                        type="radio"
                        required
                        value="Female"
                        id="female"
                        name="gender"
                        onClick={(e) =>
                          dispatch({
                            type: "INPUT",
                            payload: { name: e.target.name, value: e.target.value },
                          })
                        }
                        className="radio checked:bg-blue-900"
                      />
                    </label>
                  </div>
                  <div className="form-control ml-3">
                    <label className="label cursor-pointer ml-3">
                      <span className="label-text">Others</span>
                      <input
                        type="radio"
                        id="other"
                        required
                        value="others"
                        name="gender"
                        onClick={(e) =>
                          dispatch({
                            type: "INPUT",
                            payload: { name: e.target.name, value: e.target.value },
                          })
                        }
                        className="radio checked:bg-blue-900"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="address" className="text-sm">
                  Education
                </label>
                <select
                  name="Education"
                  id="Education"
                  required
                  onChange={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-gray-100 border-gray-300 text-gray-900"
                >
                  <option value="Default">Default</option>
                  <option value="SSC">SSC</option>
                  <option value="HSC">HSC</option>
                  <option value="UnderGraduate"> Under Graduate</option>
                  <option value="PostGraduate">Post Graduate</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="city" className="text-sm">
                  Number
                </label>
                <div className="flex justify-between items-center w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-gray-100 border-gray-300 text-gray-900">
                  <p
                    onClick={() =>
                      setNumber((prev) => {
                        dispatch({
                          type: "INPUT",
                          payload: { name: "number", value: prev + 1 },
                        });
                        return prev + 1;
                      })
                    }
                    className="py-2 px-2 border-0 bg-blue-700 text-white cursor-pointer"
                  >
                    +
                  </p>
                  <div name="number" className="py-2 px-2  w-5/6 border text-center">
                    {number}
                  </div>
                  <p
                    id="number"
                    name="number"
                    onClick={() =>
                      setNumber((count) => {
                        dispatch({
                          type: "INPUT",
                          payload: { name: "number", value: count - 1 },
                        });
                        return count - 1;
                      })
                    }
                    className="py-2 px-2 border-0 bg-blue-700 text-white cursor-pointer"
                  >
                    -
                  </p>
                </div>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="Message" className="text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  name="message"
                  onBlur={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                  placeholder="Write Message Here"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-gray-100 border-gray-300 text-gray-900"
                ></textarea>
              </div>
            </div>
            <div className="col-span-full sm:col-span-3 relative items-center justify-center ">
              <div className="terms">
                <input onClick={() => dispatch({ type: "TOGGLE" })} type="checkbox" className="mr-2" />
                <label htmlFor="terms">Accept Terms & conditions</label>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={!state.terms}
                  className="btn bg-blue-800 bottom-0 absolute right-0 py-2 rounded px-4"
                >
                  Submit
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default FormInput;
