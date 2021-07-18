import React from "react";
import Switch from "react-switch";

export default function LicenseForm() {
  return (
    <>
      <div className="item-wrapper">
        <div className="header-content">
          <h2>Standard Privacy Note</h2>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
          repellendus nam explicabo sequi aspernatur temporibus itaque. Ea
          laborum rerum consectetur blanditiis illo eveniet dicta, tenetur eos
          quas odio nostrum ipsum?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
          repellendus nam explicabo sequi aspernatur temporibus itaque. Ea
          laborum rerum consectetur blanditiis illo eveniet dicta, tenetur eos
          quas odio nostrum ipsum?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
          repellendus nam explicabo sequi aspernatur temporibus itaque. Ea
          laborum rerum consectetur blanditiis illo eveniet dicta, tenetur eos
          quas odio nostrum ipsum?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
          repellendus nam explicabo sequi aspernatur temporibus itaque. Ea
          laborum rerum consectetur blanditiis illo eveniet dicta, tenetur eos
          quas odio nostrum ipsum?
        </p>
        <p>I want to receive information or communication from L'OCCITANE</p>
      </div>

      <div className="additional-information">
        <div className="item-information">
          <span className="content-license">SMS & Mobile Call</span>
          <Switch
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
          />
        </div>

        <div className="">
          <span className="content-license">Emailing</span>
          <Switch
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
          />
        </div>

        <div className="item-information-mail">
          <span className="content-license-mail">Mailing</span>
          <Switch
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
          />
        </div>
      </div>

      <div className="license">
        <input type="checkbox" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          velit ex, impedit molestias odio earum consequatur quod laudantium
          ducimus doloremque accusamus sed magni temporibus harum nobis! Rem
          voluptatem laudantium placeat?
        </p>
      </div>
    </>
  );
}
