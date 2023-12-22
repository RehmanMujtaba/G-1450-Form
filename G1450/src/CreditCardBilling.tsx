import { Formik, Field } from "formik";
import { useState } from "react";

const CreditCardBillingInfo = () => {
  const [showNumberField, setShowNumberField] = useState(false);

  const handleAptSteFlrChange = (e: any) => {
    console.log(e.target.value);
    if (e.target.value === "none") {
      setShowNumberField(false);
    } else {
      setShowNumberField(true);
    }
  };    

  return (
    <>
      <label htmlFor="creditCardInfo.givenName">Given Name (First Name)</label>
      <Field
        type="text"
        id="creditCardInfo.givenName"
        name="creditCardInfo.givenName"
      />
      <label htmlFor="creditCardInfo.middleName">Middle Name (if any)</label>
      <Field
        type="text"
        id="creditCardInfo.middleName"
        name="creditCardInfo.middleName"
      />
      <label htmlFor="creditCardInfo.familyName">Family Name (Last Name)</label>
      <Field
        type="text"
        id="creditCardInfo.familyName"
        name="creditCardInfo.familyName"
      />
      <label htmlFor="creditCardInfo.billingAddress">
        Street Number and Name
      </label>
      <Field
        type="text"
        id="creditCardInfo.billingAddress"
        name="creditCardInfo.billingAddress"
      />
      <label htmlFor="creditCardInfo.aptSteFlr">Apt. Ste. Flr.</label>
      <div>
        <label>
          <Field
            type="radio"
            name="creditCardInfo.aptSteFlr"
            value="apt"
            onChange={handleAptSteFlrChange}
          />
          Apt.
        </label>
        <label>
          <Field
            type="radio"
            name="creditCardInfo.aptSteFlr"
            value="ste"
            onChange={handleAptSteFlrChange}
          />
          Ste.
        </label>
        <label>
          <Field
            type="radio"
            name="creditCardInfo.aptSteFlr"
            value="flr"
            onChange={handleAptSteFlrChange}
          />
          Flr.
        </label>
        <label>
          <Field
            type="radio"
            name="creditCardInfo.aptSteFlr"
            value="none"
            onChange={handleAptSteFlrChange}
          />
          N/A
        </label>
      </div>
      {showNumberField && (
        <>
          <label htmlFor="creditCardInfo.number">Number</label>
          <Field
            type="text"
            id="creditCardInfo.number"
            name="creditCardInfo.number"
          />
        </>
      )}

      <label htmlFor="creditCardInfo.city">City or Town</label>
      <Field type="text" id="creditCardInfo.city" name="creditCardInfo.city" />
      <label htmlFor="creditCardInfo.state">State</label>
      <Field
        type="text"
        id="creditCardInfo.state"
        name="creditCardInfo.state"
      />
      <label htmlFor="creditCardInfo.zipCode">ZIP Code</label>
      <Field
        type="text"
        id="creditCardInfo.zipCode"
        name="creditCardInfo.zipCode"
      />
      <label htmlFor="creditCardInfo.daytimePhoneNumber">
        Credit Card Holder's Daytime Telephone Number
      </label>
      <Field
        type="text"
        id="creditCardInfo.daytimePhoneNumber"
        name="creditCardInfo.daytimePhoneNumber"
      />
      <label htmlFor="creditCardInfo.emailAddress">
        Credit Card Holder's Email Address
      </label>
      <Field
        type="text"
        id="creditCardInfo.emailAddress"
        name="creditCardInfo.emailAddress"
      />
    </>
  );
};

export default CreditCardBillingInfo;
