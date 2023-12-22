const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// PostgreSQL configuration
const pool = new Pool({
  user: '',
  host: '',
  database: '',
  password: '',
  port: 5432,
});

app.post('/submit-form', async (req, res) => {
  const formData = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO form_data ' +
      '(applicant_given_name, applicant_middle_name, applicant_family_name, ' +
      'cc_given_name, cc_middle_name, cc_family_name, billing_address, apt_ste_flr, ' +
      'number, city, state, zip_code, daytime_phone_number, email_address, ' +
      'card_number, card_type, expiration_date, authorized_payment_amount, image) ' +
      'VALUES ' +
      '($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)',
      [
        formData.applicantInfo.givenName,
        formData.applicantInfo.middleName,
        formData.applicantInfo.familyName,
        formData.creditCardInfo.givenName,
        formData.creditCardInfo.middleName,
        formData.creditCardInfo.familyName,
        formData.creditCardInfo.billingAddress,
        formData.creditCardInfo.aptSteFlr,
        formData.creditCardInfo.number,
        formData.creditCardInfo.city,
        formData.creditCardInfo.state,
        formData.creditCardInfo.zipCode,
        formData.creditCardInfo.daytimePhoneNumber,
        formData.creditCardInfo.emailAddress,
        formData.cardDetails.cardNumber,
        formData.cardDetails.cardType,
        formData.cardDetails.expirationDate,
        formData.cardDetails.authorizedPaymentAmount,
        formData.image,
      ]
    );

    console.log('Form data inserted successfully:', result.rows);
    res.status(201).json({ message: 'Form data inserted successfully' });
  } catch (error) {
    console.error('Error inserting form data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

