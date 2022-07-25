import axios from 'axios';
import { toast } from 'react-toastify';

export const addCitizen = async (formValues) => {
  console.log(formValues);
  await axios
    .post('/citizens/add/citizen', formValues)
    .then((response) => {
      console.log(response.data);
      if (response.data.error) {
        toast.error('Error adding citizen');
      } else {
        if (response.status === 200) {
          toast.success(response.data.message);
        } else {
          toast.info(response.data.message);
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
