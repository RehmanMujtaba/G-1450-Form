import { Field } from "formik";

const CreditCardInfo = () => {
  return (
    <>
      <label htmlFor="cardDetails.cardNumber">Credit Card Number</label>
      <Field
        type="text"
        id="cardDetails.cardNumber"
        name="cardDetails.cardNumber"
      />
      <label htmlFor="cardDetails.cardType">Card Type</label>
      <Field
        type="text"
        id="cardDetails.cardType"
        name="cardDetails.cardType"
      />
      <label htmlFor="cardDetails.expirationDate">Expiration Date</label>
      <Field
        type="text"
        id="cardDetails.expirationDate"
        name="cardDetails.expirationDate"
      />
      <label htmlFor="cardDetails.authorizedPaymentAmount">Amount</label>
      <Field
        type="text"
        id="cardDetails.authorizedPaymentAmount"
        name="cardDetails.authorizedPaymentAmount"
      />
    </>
  );
};

export default CreditCardInfo;
