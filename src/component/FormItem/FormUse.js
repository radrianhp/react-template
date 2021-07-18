import { useState } from "react";

export default function FormUse() {
  const [values, setValues] = useState({
    title: "",
    lastName: "",
    firstName: "",
    flag: "",
    number: "",
    address: "",
    country: "",
    province: "",
    email: "",
    date: "",
    month: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return { values, handleChange };
}
