import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Axios from "axios";
import Select from "react-select";
import { DayPicker, MonthPicker, YearPicker } from "react-dropdown-date";
//image

//stars
import { RiStarSFill } from "react-icons/ri";

//parts
import HeaderForm from "../../parts/HeaderForm/HeaderForm";
import LicenseForm from "../../parts/LicenseForm/LicenseForm";

//HandleChange
import FormUse from "../FormItem/FormUse";

export default function FormItem({ Data, error }) {
  const { values, handleChange } = FormUse();

  //Checkbox
  const checkboxItem = ["Mrs", "Ms", "Mdm", "Mr", "Dr"];
  const [dataCountry, setDataCountry] = useState([]);

  //option
  const [option, setOptions] = useState({ selectedOption: null });

  useEffect(() => {
    Axios.get(`https://restcountries.eu/rest/v2/all`)
      .then((result) => {
        // console.log("data API", result.data);
        const responseAPI = result;
        setDataCountry(responseAPI.data);

        const options = responseAPI.data.map((d) => ({
          value: d.name,
          label: (
            <div>
              <img src={d.flag} height="30px" width="30px" alt={d.name} />
            </div>
          ),
        }));
        setOptions(options);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    Data(values);
  };

  return (
    <>
      <HeaderForm />

      <div className="container">
        <div className="header-content">
          <h1>Create new account</h1>
        </div>
        {/* Error */}
        {error !== "" ? <div className="error">{error}</div> : ""}

        <form onSubmit={submitHandler}>
          <div className="form-group">
            <div className="form-label">
              <label htmlFor="title">Title</label>
            </div>
            <div className="wrapper-checkbox">
              {checkboxItem.map((data, index) => {
                return (
                  <>
                    <input
                      type="checkbox"
                      name="title"
                      id={data}
                      value={data}
                      key={`title-${index}`}
                      checked={values.title === data}
                      onChange={handleChange}
                    />
                    <span className="span-checkbox">{data}</span>
                  </>
                );
              })}
            </div>
          </div>

          {/* identity */}
          <div className="form-group">
            <div className="wrapper-group">
              <div className="groupright">
                <div className="form-label">
                  <label htmlFor="name">
                    First name
                    <RiStarSFill className="stars-label" />
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="First name"
                  className="input-group"
                  name="firstName"
                  onChange={handleChange}
                  value={values.firstName}
                />
              </div>

              <div className="groupleft">
                <div className="form-label">
                  <label htmlFor="name">
                    Last name
                    <RiStarSFill className="stars-label" />
                  </label>
                </div>

                <input
                  type="text"
                  placeholder="Last name"
                  className="input-group"
                  name="lastName"
                  onChange={handleChange}
                  value={values.lastName}
                />
              </div>
            </div>
          </div>

          {/* mobile */}
          <div className="form-group">
            <div className="wrapper-group">
              <div className="groupleft">
                <div className="form-label">
                  <label htmlFor="mobile">
                    Mobile phone number
                    <RiStarSFill className="stars-label" />
                  </label>
                </div>

                <div className="groupleft-grouping">
                  <div className="mobile-flag">
                    <Select
                      id="flag"
                      name="flag"
                      options={option}
                      onChange={handleChange}
                      placeholder={"Country"}
                      value={values.flag}
                    />

                    {/* 
                    <select
                    name="flag"
                    id="flag"
                    className="input-group"
                    onChange={handleChange}
                    >
                    <option value=""></option>

                    {dataCountry.map((flag, index) => {
                      return (
                        <>
                          <option
                            value={flag.name}
                            key={`flag-${index}`}
                            data-content={`<img src=${flag.flag}  />`}
                          >
                            {flag.name}
                          </option>
                          ;
                        </>
                      );
                    })}
                    </select> */}
                  </div>
                  <div className="mobile-number">
                    <input
                      type="tel"
                      placeholder="Mobile phone number"
                      className="input-group"
                      name="number"
                      onChange={handleChange}
                      value={values.number}
                    />
                  </div>
                </div>
              </div>
              <div className="groupright"></div>
            </div>
          </div>

          {/* address */}
          <div className="form-group">
            <div className="header-content">
              <h1>Address</h1>
            </div>
            <div className="form-label">
              <label htmlFor="address">Address</label>
            </div>
            <input
              type="text"
              placeholder="Address"
              className="input-group"
              name="address"
              onChange={handleChange}
              value={values.address}
            />
          </div>

          {/* country */}
          <div className="form-group">
            <div className="wrapper-group">
              <div className="groupleft">
                <div className="form-label">
                  <label htmlFor="">
                    Country/Location
                    <RiStarSFill className="stars-label" />
                  </label>
                </div>
                <select
                  name="country"
                  id="country"
                  onChange={handleChange}
                  className="input-group"
                >
                  <option value="">Select/Country</option>
                  {dataCountry.map((country, index) => {
                    return (
                      <option value={country.name} key={`country-${index}`}>
                        {country.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="groupleft">
                <div className="form-label">
                  <label htmlFor="province">
                    Province/District
                    <RiStarSFill className="stars-label" />
                  </label>
                </div>
                <input
                  type="text"
                  name="province"
                  placeholder="Province/District"
                  className="input-group"
                  onChange={handleChange}
                  value={values.province}
                />
              </div>
            </div>
          </div>

          {/* contacts */}
          <div className="form-group">
            <div className="wrapper-group">
              <div className="groupleft">
                <div className="form-label">
                  <label htmlFor="">
                    Email Address
                    <RiStarSFill className="stars-label" />
                  </label>
                </div>
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  className="input-group"
                  onChange={handleChange}
                  value={values.email}
                />
              </div>
              <div className="groupright">
                <div className="groupright-grouping">
                  <div className="date-group">
                    <div className="form-label">
                      <label htmlFor="date">
                        Date of birth
                        <RiStarSFill className="stars-label" />
                      </label>
                    </div>
                    <DayPicker
                      defaultValue={"DD"}
                      value={values.date}
                      id="date"
                      name="date"
                      onChange={handleChange}
                      classes="input-group"
                    />
                    {/* <input
                      type="text"
                      name="date"
                      className="input-group"
                      onChange={handleChange}
                      value={values.date}
                    /> */}
                  </div>
                  <div className="month-group">
                    <div className="form-label">
                      <label htmlFor="Month">
                        Month
                        <RiStarSFill className="stars-label" />
                      </label>
                    </div>
                    <MonthPicker
                      defaultValue={"MM"}
                      short
                      value={values.month}
                      onChange={handleChange}
                      id={"month"}
                      name={"month"}
                      classes={"input-group"}
                    />
                    {/* <input
                      type="text"
                      name="month"
                      className="input-group"
                      onChange={handleChange}
                      value={values.month}
                    /> */}
                  </div>

                  <div className="year-group">
                    <div className="form-label">
                      <label htmlFor="Year">
                        Year
                        <RiStarSFill className="stars-label" />
                      </label>
                    </div>
                    <YearPicker
                      defaultValue={"YY"}
                      reverse
                      value={values.year}
                      onChange={handleChange}
                      id={"year"}
                      name={"year"}
                      classes={"input-group"}
                    />
                    {/* <input
                      type="text"
                      name="year"
                      className="input-group"
                      onChange={handleChange}
                      value={values.year}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <LicenseForm />
          <Button title="Create Customer" />
        </form>
      </div>
    </>
  );
}
