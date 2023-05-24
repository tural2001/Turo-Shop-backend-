const Stripe = require('stripe')(process.env.SECRET_KEY);

const createpayment = async (req, res) => {
  let status, error;
  const { token, amount } = req.body;
  try {
    await Stripe.charges.create({
      source: token.id,
      amount: amount * 100,
      currency: 'azn',
    });
    status = 'success';
  } catch (error) {
    console.log(error);
    status = 'Failure';
  }
  res.json({ error, status });
};

module.exports = createpayment;
