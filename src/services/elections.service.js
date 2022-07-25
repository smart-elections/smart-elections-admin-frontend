import axios from 'axios';
import { toast } from 'react-toastify';

export const addElection = async (formValues) => {
  await axios
    .post('/elections/add/election', formValues)
    .then((response) => {
      if (response.data.error) {
        toast.error('Error adding election');
      } else {
        if (response.status === 200) {
          toast.success('Election added successfully');
        } else {
          toast.warning(response.data.message);
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
