/*eslint-disable*/

import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async tourId => {
  const stripe = Stripe(
    'pk_test_51Jdx9oHt8pGBkw3YnKFFd5HxRZdBTYif51OghoN586Smo5ZIe1H7VFvFU7pZKiNmm71JuEtKDzfaLxbp4pfcrPV300o7L7hZgS'
  );
  try {
    //1) Get checkout session from API
    const session = await axios(
      `http://localhost:8007/api/v1/bookings/checkout-session/${tourId}`
    );
    //2)Create checkout form + charge credict card

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
