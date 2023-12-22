import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  applicantInfo: Yup.object().shape({
    givenName: Yup.string().required("First Name is required"),
    middleName: Yup.string(),
    familyName: Yup.string().required("Last Name is required"),
  }),
  creditCardInfo: Yup.object().shape({
    givenName: Yup.string().required("First Name is required"),
    middleName: Yup.string(),
    familyName: Yup.string().required("Last Name is required"),
    billingAddress: Yup.string().required("Street Number and Name is required"),
    number: Yup.string(),
    city: Yup.string().required("City or Town is required"),
    state: Yup.string().required("State is required"),
    zipCode: Yup.string().required("ZIP Code is required"),
    daytimePhoneNumber: Yup.string().required(
      "Daytime Phone Number is required"
    ),
    emailAddress: Yup.string()
      .email("Invalid email address")
      .required("Email Address is required"),
  }),
  cardDetails: Yup.object().shape({
    cardNumber: Yup.string()
      .matches(/^\d{16}$/, "Invalid card number")
      .required("Card Number is required"),
    cardType: Yup.string().required("Card Type is required"),
    expirationDate: Yup.string()
      .matches(/^(0[1-9]|1[0-2])\/\d{4}$/, "Invalid expiration date")
      .required("Expiration Date is required"),
    authorizedPaymentAmount: Yup.number()
      .integer("Amount must be an integer")
      .min(1, "Amount must be greater than 0")
      .required("Amount is required"),
  }),
  image: Yup.mixed().required("Please upload a signature"),
});

export default validationSchema;
