import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  TextField,
  Button,
  Radio,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
// import TextField from "./TextField";
import CustomizedSelect from "./Select.tsx";
import { useState } from "react";

// import ApplicantInfo from "./ApplicantInfo";
// import CreditCardBillingInfo from "./CreditCardBilling";
// import CreditCardInfo from "./CreditCardInfo";

import initialValues from "./initialValues";
import validationSchema from "./validation";

import "./App.css";

// const useStyles = makeStyles((theme) => ({
//   blueBorder: {
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: 'blue',
//       },
//       '&:hover fieldset': {
//         borderColor: 'blue',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: 'blue',
//       },
//     },
//   },
// }));

// Define an array of state names
const stateOptions = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

export default function App() {
  const handleSubmit = async (values: any) => {
    try {
      // Send a POST request to your Express server
      const response = await fetch(" http://localhost:3000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log("Form data submitted successfully!");
        // You can perform additional actions on success, such as redirecting the user or showing a success message
      } else {
        console.error("Error submitting form data:", response.statusText);
        // Handle the error, display an error message, or take other appropriate actions
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      // Handle the error, display an error message, or take other appropriate actions
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form id="main-form">
          <h1>Authorization for Credit Card Transactions (G-1450)</h1>
          <p>
            <b>NOTE:</b> Please see the USCIS Form G-1450 website for additional
            information.
          </p>
          <p>
            By completing this transaction, you agree that you have paid for a
            government service and that the filing fee, biometric services fee
            and all related financial transactions are final and not refundable,
            regardless of any action USCIS takes on an application, petition, or
            request. You must submit all fees in the exact amounts. USCIS will
            charge your credit card up to the amount you authorize below.{" "}
          </p>
          <p>
            Please refer to the form(s) you are filing for additional
            information, or you may call the USCIS Customer Contact number at
            <b> 1-800-375-5283</b>. For TTY (deaf or hard of hearing) call:{" "}
            <b>1-800-767-1833</b>.
          </p>
          <h2>
            Applicant's/Petitioner's/Requester's Information <br></br> (Full
            Legal Name)
          </h2>
          <div id="basic-info">
            <div className="form-group">
              <label htmlFor="applicantInfo.givenName">
                Given Name (First Name)
              </label>
              <Field
                as={TextField}
                type="text"
                id="applicantInfo.givenName"
                name="applicantInfo.givenName"
              />
              <ErrorMessage
                name="applicantInfo.givenName"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="applicantInfo.middleName">
                Middle Name (if any)
              </label>
              <Field
                as={TextField}
                type="text"
                id="applicantInfo.middleName"
                name="applicantInfo.middleName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="applicantInfo.familyName">
                Family Name (Last Name)
              </label>
              <Field
                as={TextField}
                type="text"
                id="applicantInfo.familyName"
                name="applicantInfo.familyName"
              />
              <ErrorMessage
                name="applicantInfo.familyName"
                component="div"
                className="text-danger"
              />
            </div>
          </div>
          <h2>
            Credit Card Billing Information <br></br> (Credit Card Holder's Name
            as it Appears on the Card)
          </h2>
          <div id="basic-info">
            <div className="form-group">
              <label htmlFor="creditCardInfo.givenName">
                Given Name (First Name)
              </label>
              <Field
                as={TextField}
                type="text"
                id="creditCardInfo.givenName"
                name="creditCardInfo.givenName"
              />
              <ErrorMessage
                name="creditCardInfo.givenName"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="creditCardInfo.middleName">
                Middle Name (if any)
              </label>
              <Field
                as={TextField}
                type="text"
                id="creditCardInfo.middleName"
                name="creditCardInfo.middleName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="creditCardInfo.familyName">
                Family Name (Last Name)
              </label>
              <Field
                as={TextField}
                type="text"
                id="creditCardInfo.familyName"
                name="creditCardInfo.familyName"
              />
              <ErrorMessage
                name="creditCardInfo.familyName"
                component="div"
                className="text-danger"
              />
            </div>
          </div>
          <label htmlFor="creditCardInfo.billingAddress">
            Street Number and Name
          </label>
          <Field
            as={TextField}
            type="text"
            id="creditCardInfo.billingAddress"
            name="creditCardInfo.billingAddress"
          />
          <ErrorMessage
            name="creditCardInfo.billingAddress"
            component="div"
            className="text-danger"
          />
          <div className="apt-ste-flr">
            <div>
              <label>
                <Field
                  as={Radio}
                  type="radio"
                  name="creditCardInfo.aptSteFlr"
                  value="apt"
                />
                Apartment
              </label>
              <label>
                <Field
                  as={Radio}
                  type="radio"
                  name="creditCardInfo.aptSteFlr"
                  value="ste"
                />
                Suite
              </label>
              <label>
                <Field
                  as={Radio}
                  type="radio"
                  name="creditCardInfo.aptSteFlr"
                  value="flr"
                />
                Floor
              </label>
              <label>
                <Field
                  as={Radio}
                  type="radio"
                  name="creditCardInfo.aptSteFlr"
                  value="none"
                />
                N/A
              </label>
            </div>
            {props.values.creditCardInfo.aptSteFlr !== "none" && (
              <>
                <label htmlFor="creditCardInfo.number">Number</label>
                <Field
                  as={TextField}
                  type="text"
                  id="creditCardInfo.number"
                  name="creditCardInfo.number"
                />
              </>
            )}
          </div>

          <label htmlFor="creditCardInfo.city">City or Town</label>
          <Field
            as={TextField}
            type="text"
            id="creditCardInfo.city"
            name="creditCardInfo.city"
          />
          <ErrorMessage
            name="creditCardInfo.city"
            component="div"
            className="text-danger"
          />
          {/* 
          <label htmlFor="cardDetails.cardType">Card Type</label>
          <Field
            as={TextField}
            select
            id="cardDetails.cardType"
            name="cardDetails.cardType"
          >
            <MenuItem value="Visa">Visa</MenuItem>
            <MenuItem value="MasterCard">MasterCard</MenuItem>
            <MenuItem value="Discover">Discover</MenuItem>
            <MenuItem value="American Express">American Express</MenuItem>
          </Field> */}

          <FormControl>
            <label htmlFor="creditCardInfo.state">Select a State:</label>
            <Field
              as={Select}
              id="creditCardInfo.state"
              name="creditCardInfo.state"
            >
              <MenuItem value="" disabled>
                Select a state
              </MenuItem>
              {stateOptions.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Field>
          </FormControl>

          <ErrorMessage
            name="creditCardInfo.state"
            component="div"
            className="text-danger"
          />

          <label htmlFor="creditCardInfo.zipCode">ZIP Code</label>
          <Field
            as={TextField}
            type="text"
            id="creditCardInfo.zipCode"
            name="creditCardInfo.zipCode"
          />
          <ErrorMessage
            name="creditCardInfo.zipCode"
            component="div"
            className="text-danger"
          />

          <h2>Credit Card Holder's Signature and Contact Information</h2>

          <div className="signiture">
            <label htmlFor="image" className="form-label">
              Upload Credit Card Holder's Signature
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={(event) => {
                props.setFieldValue("image", event.currentTarget.files[0]);
              }}
              onBlur={props.handleBlur}
              className="visually-hidden"
            />
            <label htmlFor="image">
              <Button
                component="span"
                variant="contained"
                color="primary"
                style={{ marginTop: "10px" }}
              >
                Upload Signature
              </Button>
            </label>
            {props.values.image && <p>Signiture Uploaded</p>}
            <ErrorMessage
              name="image"
              component="div"
              className="text-danger"
            />
          </div>

          <label htmlFor="creditCardInfo.daytimePhoneNumber">
            Credit Card Holder's Daytime Telephone Number
          </label>
          <Field
            as={TextField}
            type="text"
            id="creditCardInfo.daytimePhoneNumber"
            name="creditCardInfo.daytimePhoneNumber"
          />
          <ErrorMessage
            name="creditCardInfo.daytimePhoneNumber"
            component="div"
            className="text-danger"
          />

          <label htmlFor="creditCardInfo.emailAddress">
            Credit Card Holder's Email Address
          </label>
          <Field
            as={TextField}
            type="text"
            id="creditCardInfo.emailAddress"
            name="creditCardInfo.emailAddress"
          />
          <ErrorMessage
            name="creditCardInfo.emailAddress"
            component="div"
            className="text-danger"
          />
          <h2>Credit Card Information</h2>
          <>
            <label htmlFor="cardDetails.cardNumber">Credit Card Number</label>
            <Field
              as={TextField}
              type="text"
              id="cardDetails.cardNumber"
              name="cardDetails.cardNumber"
            />
            <ErrorMessage
              name="cardDetails.cardNumber"
              component="div"
              className="text-danger"
            />
            <label htmlFor="cardDetails.cardType">Card Type</label>
            <Field
              as={TextField}
              select
              id="cardDetails.cardType"
              name="cardDetails.cardType"
            >
              <MenuItem value="Visa">Visa</MenuItem>
              <MenuItem value="MasterCard">MasterCard</MenuItem>
              <MenuItem value="Discover">Discover</MenuItem>
              <MenuItem value="American Express">American Express</MenuItem>
            </Field>
            <ErrorMessage
              name="cardDetails.cardType"
              component="div"
              className="text-danger"
            />

            <label htmlFor="cardDetails.expirationDate">
              Expiration Date (mm/yyyy)
            </label>
            <Field
              as={TextField}
              type="text"
              id="cardDetails.expirationDate"
              name="cardDetails.expirationDate"
            />
            <ErrorMessage
              name="cardDetails.expirationDate"
              component="div"
              className="text-danger"
            />
            <label htmlFor="cardDetails.authorizedPaymentAmount">
              Authorized Payment Amount
            </label>
            <Field
              as={TextField}
              type="text"
              id="cardDetails.authorizedPaymentAmount"
              name="cardDetails.authorizedPaymentAmount"
            />
            <ErrorMessage
              name="cardDetails.authorizedPaymentAmount"
              component="div"
              className="text-danger"
            />
          </>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "10px" }}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
