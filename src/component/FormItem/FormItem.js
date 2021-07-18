import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Select from "react-select";
import Axios from "axios";

//image
import Logo from "../../assets/logo.png";

//stars
import { RiStarSFill } from "react-icons/ri";

//parts
import HeaderForm from "../../parts/HeaderForm/HeaderForm";
import LicenseForm from "../../parts/LicenseForm/LicenseForm";

export default function FormItem({ Data, error }) {
  const [details, setDetails] = useState({
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
  const [dataCountry, setDataCountry] = useState([]);

  const options = [
    {
      value: "chocolate",
      label: (
        <div>
          <img src={Logo} height="30px" width="30px" />
          Chocolate
        </div>
      ),
    },
  ];
  useEffect(() => {
    Axios.get(`https://restcountries.eu/rest/v2/all`)
      .then((result) => {
        // console.log("data API", result.data);
        const responseAPI = result;
        setDataCountry(responseAPI.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    Data(details);
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

            <div
              className="wrapper-checkbox"
              onChange={(e) =>
                setDetails({ ...details, title: e.target.value })
              }
            >
              <input
                type="checkbox"
                value="Mrs"
                checked={details.title === "Mrs"}
              />
              <span className="span-checkbox"> Mrs</span>

              <input
                type="checkbox"
                value="Ms"
                checked={details.title === "Ms"}
              />
              <span className="span-checkbox"> Ms</span>
              <input
                type="checkbox"
                value="Mdm"
                checked={details.title === "Mdm"}
              />
              <span className="span-checkbox"> Mdm</span>
              <input
                type="checkbox"
                value="Mr"
                checked={details.title === "Mr"}
              />
              <span className="span-checkbox"> Mr</span>
              <input
                type="checkbox"
                value="Dr"
                checked={details.title === "Dr"}
              />
              <span className="span-checkbox"> Dr</span>
            </div>
          </div>

          {/* identity */}
          <div className="form-group">
            <div className="wrapper-group">
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
                  onChange={(e) =>
                    setDetails({ ...details, lastName: e.target.value })
                  }
                  value={details.lastName}
                />
              </div>

              <div className="groupright">
                <div className="form-label">
                  <label htmlFor="name">
                    First name
                    <RiStarSFill className="stars-label" />
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="Last name"
                  className="input-group"
                  onChange={(e) =>
                    setDetails({ ...details, firstName: e.target.value })
                  }
                  value={details.firstName}
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
                      options={options}
                      placeholder="select your country"
                      className="mobile-dropdown"
                    />
                  </div>
                  <div className="mobile-number">
                    <input
                      type="number"
                      placeholder="Mobile phone number"
                      className="input-group"
                      onChange={(e) =>
                        setDetails({ ...details, number: e.target.value })
                      }
                      value={details.number}
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
              onChange={(e) =>
                setDetails({ ...details, address: e.target.value })
              }
              value={details.address}
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
                  name=""
                  id=""
                  onChange={(e) =>
                    setDetails({ ...details, country: e.target.value })
                  }
                  className="input-group"
                >
                  <option value="">Select/Country</option>
                  {dataCountry.map((country, index) => {
                    return (
                      <option value={country.name} key={`country` + index}>
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
                  placeholder="Province/District"
                  className="input-group"
                  onChange={(e) =>
                    setDetails({ ...details, province: e.target.value })
                  }
                  value={details.province}
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
                    Email Address{" "}
                    <i className="stars-label">
                      <RiStarSFill />
                    </i>
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input-group"
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                  value={details.email}
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
                    <input
                      type="text"
                      className="input-group"
                      onChange={(e) =>
                        setDetails({ ...details, date: e.target.value })
                      }
                      value={details.date}
                    />
                  </div>
                  <div className="month-group">
                    <div className="form-label">
                      <label htmlFor="Month">
                        Month
                        <RiStarSFill className="stars-label" />
                      </label>
                    </div>
                    <input
                      type="text"
                      className="input-group"
                      onChange={(e) =>
                        setDetails({ ...details, month: e.target.value })
                      }
                      value={details.month}
                    />
                  </div>

                  <div className="year-group">
                    <div className="form-label">
                      <label htmlFor="Year">
                        Year
                        <RiStarSFill className="stars-label" />
                      </label>
                    </div>

                    <input
                      type="text"
                      className="input-group"
                      onChange={(e) =>
                        setDetails({ ...details, year: e.target.value })
                      }
                      value={details.year}
                    />
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
