import React from "react";
import Select from "react-select";

//image
import Logo from "../../assets/logo.png";

//Icons
import { IoSettingsSharp } from "react-icons/io5";

export default function HeaderForm() {
  const language = [
    { value: "Indonesia", label: "Indonesia" },
    { value: "English", label: "English" },
  ];

  return (
    <>
      <header>
        <div className="header-group">
          <div className="header-logo">
            <div className="header-image">
              <img src={Logo} alt="logo" className="img-preview" />
            </div>
          </div>

          <div className="header-language">
            <label htmlFor="language" className="label-language">
              Language:
            </label>
            <Select
              options={language}
              className="select-react-dropdown"
            ></Select>
            <i className="icon-setting">
              <IoSettingsSharp />
            </i>
          </div>
        </div>

        <div className="wrapper-account">
          <span className="content-account">
            You don't have an account yet, please create a new account
          </span>
        </div>
      </header>
    </>
  );
}
