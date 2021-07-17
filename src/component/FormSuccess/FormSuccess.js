import React from "react";

export default function FormSuccess(props) {
  const {
    title,
    lastName,
    firstName,
    flag,
    number,
    address,
    country,
    province,
    email,
    date,
    month,
    year,
  } = props;
  return (
    <>
      <div className="container">
        <div className="card-wrapper">
          <div className="card-success">
            <h1>Success</h1>
            <span>{title}</span>
            <span>{lastName}</span>
            <span>{firstName}</span>
            <span>{flag}</span>
            <span>{number}</span>
            <span>{address}</span>
            <span>{country}</span>
            <span>{province}</span>
            <span>{email}</span>
            <span>{date}</span>
            <span>{month}</span>
            <span>{year}</span>
          </div>
        </div>
      </div>
    </>
  );
}
