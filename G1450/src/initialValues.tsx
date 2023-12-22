const initialValues = {
  applicantInfo: {
    givenName: "",
    middleName: "",
    familyName: "",
  },
  creditCardInfo: {
    givenName: "",
    middleName: "",
    familyName: "",
    billingAddress: "",
    aptSteFlr: "none",
    number: "",
    city: "",
    state: "",
    zipCode: "",
    daytimePhoneNumber: "",
    emailAddress: "",
  },
  cardDetails: {
    cardNumber: "",
    cardType: "",
    expirationDate: "",
    authorizedPaymentAmount: 0,
  },
  image: null,
};

export default initialValues;
