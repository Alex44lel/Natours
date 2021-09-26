/*eslint-disable*/
import { showAlert } from './alerts';
export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:8007/api/v1/users/login',
      data: {
        email,
        password
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in succcesful');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    console.log('ERROR');
    showAlert('error', err);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:8007/api/v1/users/logout'
    });
    if ((res.status = 'success')) {
      //reload from the server and not from browser cache thanks to true parameter in reload()
      location.reload(true);
    }
  } catch (err) {
    console.log(err);
    showAlert('error', 'Error loging out, try again');
  }
};
