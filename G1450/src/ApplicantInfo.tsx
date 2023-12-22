import { Field } from "formik";

const ApplicantInfo = () => {
  return (
    <>
      <label htmlFor="applicantInfo.givenName">Given Name (First Name)</label>
      <Field
        type="text"
        id="applicantInfo.givenName"
        name="applicantInfo.givenName"
      />
      <label htmlFor="applicantInfo.middleName">Middle Name (if any)</label>
      <Field
        type="text"
        id="applicantInfo.middleName"
        name="applicantInfo.middleName"
      />
      <label htmlFor="applicantInfo.familyName">Family Name (Last Name)</label>
      <Field
        type="text"
        id="applicantInfo.familyName"
        name="applicantInfo.familyName"
      />
    </>
  );
};

export default ApplicantInfo;
