import React from "react";
import Table from "react-bootstrap/Table";
import noImage from "../assets/images/nia.jpg";
import { DEFAULT_API_CONFIG } from "../services/config/api-config";

const MealTable = ({meal}) => {
  return (
    <div className="container">
      <h4 className="text-center mt-5">Meal Table</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Meal Name</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {meal &&
            meal.map((item, index) => {
              const image = item.product.thumbnail[0]?.url;
              return (
                <tr key={index}>
                  <td>{item.mealName}</td>
                  <td>
                    <img
                      src={image ? DEFAULT_API_CONFIG.url + image : noImage}
                      className="food-image"
                      alt=".."
                    />
                  </td>
                  <td>{item.product.price}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};
export default MealTable;
