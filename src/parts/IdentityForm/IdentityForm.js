import React, { useState } from "react";

//stars
import { RiStarSFill } from "react-icons/ri";

export default function IdentityForm() {
  const [details, setDetails] = useState({ lastName: "", firstName: "" });

  const [errors, setErrors] = useState();

  return (
    <>
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
              onChange={(e) =>
                setDetails({ ...details, firstName: e.target.value })
              }
              value={details.firstName}
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
              onChange={(e) =>
                setDetails({ ...details, lastName: e.target.value })
              }
              value={details.lastName}
            />
          </div>
        </div>
      </div>
    </>
  );
}
