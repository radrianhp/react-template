import React, { useState } from "react";
import FormItem from "../../component/FormItem/FormItem";
import FormSuccess from "../../component/FormSuccess/FormSuccess";

export default function Home() {
  const [error, setError] = useState();
  const [success, setSuccess] = useState({
    title: "",
    firstName: "",
    lastName: "",
    flag: "",
    number: "",
    address: "",
    contry: "",
    province: "",
    email: "",
    date: "",
    month: "",
    year: "",
  });

  const Validation = (data) => {
    console.log(data);
    if (
      data.title !== "" &&
      data.firstName !== "" &&
      data.lastName !== "" &&
      data.flag !== "" &&
      data.number !== "" &&
      data.address !== "" &&
      data.contry !== "" &&
      data.province !== "" &&
      data.email !== "" &&
      data.date !== "" &&
      data.month !== "" &&
      data.year !== ""
    ) {
      console.log("success");
      setSuccess({
        title: data.title,
        lastName: data.lastName,
        firstName: data.firstName,
        flag: data.flag,
        number: data.number,
        address: data.address,
        country: data.contry,
        province: data.province,
        email: data.email,
        date: data.date,
        month: data.month,
        year: data.year,
      });
    } else {
      console.log("error");
      setError("Data can't input!");
    }
  };

  return (
    <>
      {success.title !== "" &&
      success.firstName !== "" &&
      success.lastName !== "" &&
      success.flag !== "" &&
      success.number !== "" &&
      success.address !== "" &&
      success.contry !== "" &&
      success.province !== "" &&
      success.email !== "" &&
      success.date !== "" &&
      success.month !== "" &&
      success.year !== "" ? (
        <FormSuccess
          title={success.title}
          firstName={success.firstName}
          lastName={success.lastName}
          flag={success.flag}
          number={success.number}
          address={success.address}
          country={success.contry}
          province={success.province}
          email={success.email}
          date={success.date}
          month={success.month}
          year={success.year}
        />
      ) : (
        <FormItem Data={Validation} error={error} />
      )}
    </>
  );
}
