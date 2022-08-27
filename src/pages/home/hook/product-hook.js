import { useEffect, useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsAPI } from "../../../store/screens/product";

export const useProduct = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state);
  const [productList, setProductsList] = useState([]);
  const [meal, setMeal] = useState([]);
  const { products, loading } = productData.products;
  console.log(products)

  useLayoutEffect(() => {
    dispatch(productsAPI());
  }, []);

  useEffect(() => {
    setProductsList(products);
  }, [products]);

  useEffect(()=>{
    findMeal("week2","Monday");
  },[productList])

  const findMeal = (week, day) => {
    const weekName = { week4: 0, week2: 2, week3: 3 };
    const dayName = {
      Monday: 0,
      Tuesday: 1,
      Wednesday: 2,
      Thursday: 3,
      Friday: 4,
      Saturday: 5,
      Sunday: 6,
    };
    // console.log(products[layout[week]].meals[layout1[day]].meals)
    if(productList[weekName[week]])
      setMeal(productList[weekName[week]].meals[dayName[day]].meals);
  };

  return {
    meal,
    findMeal,
    loading
  };
};
