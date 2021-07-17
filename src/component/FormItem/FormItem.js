import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Axios from "axios";

//image
import Logo from "../../assets/logo.png";

//stars
import { RiStarSFill } from "react-icons/ri";

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
      <div className="header-img">
        <img src={Logo} alt="logo" className="img-preview" />
      </div>

      <div className="wrapper-account">
        <span className="content-account">
          You don't have an account yet, please create a new account
        </span>
      </div>

      <div className="container">
        <div className="header-content">
          <h1>Create new account</h1>
        </div>
        {/* Error */}
        {error !== "" ? <div className="error">{error}</div> : ""}
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <div
              className="wrapper-checkbox"
              onChange={(e) =>
                setDetails({ ...details, title: e.target.value })
              }
            >
              <input
                type="checkbox"
                className="radio-input"
                value="Mrs"
                checked={details.title === "Mrs"}
              />
              Mrs
              <input
                type="checkbox"
                className="radio-input"
                value="Ms"
                checked={details.title === "Ms"}
              />{" "}
              Ms
              <input
                type="checkbox"
                className="radio-input"
                value="Mdm"
                checked={details.title === "Mdm"}
              />{" "}
              Mdm
              <input
                type="checkbox"
                className="radio-input"
                value="Mr"
                checked={details.title === "Mr"}
              />{" "}
              Mr
              <input
                type="checkbox"
                className="radio-input"
                value="Dr"
                checked={details.title === "Dr"}
              />{" "}
              Dr
            </div>
          </div>

          {/* identy */}
          <div className="form-group">
            <div className="wrapper-group">
              <div className="groupleft">
                <label htmlFor="name">
                  Last name{" "}
                  <i className="stars-label">
                    <RiStarSFill />
                  </i>
                </label>
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
                <label htmlFor="name">
                  First name{" "}
                  <i className="stars-label">
                    <RiStarSFill />
                  </i>
                </label>
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
                <label htmlFor="mobile">
                  Mobile phone number{" "}
                  <i className="stars-label">
                    <RiStarSFill />
                  </i>
                </label>
                <div className="flag-group">
                  <select
                    name=""
                    id=""
                    onChange={(e) =>
                      setDetails({ ...details, flag: e.target.value })
                    }
                  >
                    <option value=""></option>
                    {/* Flag */}
                    {dataCountry.map((flag, index) => {
                      return (
                        <>
                          <option value={flag.name} key={"flag" + index}>
                            {/* <img src={flag.flag} height="30px" width="30px" /> */}
                            {flag.name}
                          </option>
                          ;
                        </>
                      );
                    })}
                  </select>
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
          </div>

          {/* address */}
          <div className="form-group">
            <div className="header-content">
              <h1>Address</h1>
            </div>
            <label htmlFor="address">Address</label>
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
                <label htmlFor="">
                  Country/Location{" "}
                  <i className="stars-label">
                    <RiStarSFill />
                  </i>
                </label>
                <select
                  name=""
                  id=""
                  onChange={(e) =>
                    setDetails({ ...details, country: e.target.value })
                  }
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
                <label htmlFor="">
                  Province/District{" "}
                  <i className="stars-label">
                    <RiStarSFill />
                  </i>
                </label>
                <input
                  type="text"
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
                <label htmlFor="">
                  Email Address{" "}
                  <i className="stars-label">
                    <RiStarSFill />
                  </i>
                </label>
                <input
                  type="text"
                  className="input-group"
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                  value={details.email}
                />
              </div>
              <div className="groupright">
                <div className="birthday-group">
                  <label htmlFor="">
                    Date of birth{" "}
                    <i className="stars-label">
                      <RiStarSFill />
                    </i>
                  </label>
                  <input
                    type="text"
                    className="input-group"
                    onChange={(e) =>
                      setDetails({ ...details, date: e.target.value })
                    }
                    value={details.date}
                  />

                  <label htmlFor="">
                    Birth{" "}
                    <i className="stars-label">
                      <RiStarSFill />
                    </i>
                  </label>
                  <input
                    type="text"
                    className="input-group"
                    onChange={(e) =>
                      setDetails({ ...details, month: e.target.value })
                    }
                    value={details.month}
                  />

                  <label htmlFor="">
                    Year{" "}
                    <i className="stars-label">
                      <RiStarSFill />
                    </i>
                  </label>
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

          <div className="item-wrapper">
            <div className="item-wrapper">
              <h2>Standard Privacy Note</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
                repellendus nam explicabo sequi aspernatur temporibus itaque. Ea
                laborum rerum consectetur blanditiis illo eveniet dicta, tenetur
                eos quas odio nostrum ipsum?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
                repellendus nam explicabo sequi aspernatur temporibus itaque. Ea
                laborum rerum consectetur blanditiis illo eveniet dicta, tenetur
                eos quas odio nostrum ipsum?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
                repellendus nam explicabo sequi aspernatur temporibus itaque. Ea
                laborum rerum consectetur blanditiis illo eveniet dicta, tenetur
                eos quas odio nostrum ipsum?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
                repellendus nam explicabo sequi aspernatur temporibus itaque. Ea
                laborum rerum consectetur blanditiis illo eveniet dicta, tenetur
                eos quas odio nostrum ipsum?
              </p>
            </div>
          </div>
          <Button title="Create Customer" />
        </form>
      </div>
    </>
  );
}
