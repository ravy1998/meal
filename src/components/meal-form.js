import React from "react";
import { Formik, Form as FormikFrom } from "formik";
import { Form } from "react-bootstrap";
import { useProduct } from "../pages/home/hook/product-hook";
import MealTable from "./meal-table";
import Loader from "./loader";

const MealForm = () => {
  const { findMeal, meal, loading } = useProduct();

  return (
    <>
      <div>
        <Formik
          initialValues={{
            week: "week2",
            day: "Monday",
          }}
          // validationSchema={validation}
          onSubmit={(values) => {
            console.log(values);
            findMeal(values.week, values.day);
          }}
        >
          {({ handleChange, handleBlur }) => (
            <FormikFrom>
              <div className="form-wrapper" id="wrapper-login">
                <div className="content-wrapper" id="content-signin">
                  <div className="row justify-content-center">
                    <div className="col-md-3 col-10 main-column">
                      <div className="row ">
                        <div className="col-12">
                          <h2 className="mb-4 signin text-center">Meal Form</h2>
                          <Form.Label>Week:</Form.Label>
                          <Form.Select
                            name="week"
                            defaultValue={"week2"}
                            onChange={handleChange}
                          >
                            <option value="week2">Week Two</option>
                            <option value="week3">Week Three</option>
                            <option value="week4">Week Four</option>
                          </Form.Select>
                        </div>
                        <div className="row mt-3">
                          <div className="col-12">
                            <Form.Label>Day:</Form.Label>
                            <Form.Select
                              name="day"
                              defaultValue={"Monday"}
                              onChange={handleChange}
                            >
                              <option value="Monday">Monday</option>
                              <option value="Tuesday">Tuesday</option>
                              <option value="Wednesday">Wednesday</option>
                              <option value="Thursday">Thursday</option>
                              <option value="Friday">Friday</option>
                              <option value="Saturday">Saturday</option>
                              <option value="Sunday">Sunday</option>
                            </Form.Select>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12 d-flex justify-content-center">
                          <button
                            type="submit"
                            className="btn btn-primary mb-2 mt-2"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FormikFrom>
          )}
        </Formik>
      </div>
      {meal.length > 0 && loading === false ? (
        <MealTable meal={meal} />
      ) : loading === false ? (
        <div className="text-center mt-5">
          <h1>No Meal Found...</h1>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default MealForm;
