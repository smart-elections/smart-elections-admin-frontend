import axios from 'axios';
import { toast } from 'react-toastify';

export const addCandidate = async (formValues) => {
  console.log(formValues);
  await axios
    .post('/candidates/add/candidate', formValues)
    .then((response) => {
      console.log(response.data);
      if (response.data.error) {
        toast.error('Error adding candidate');
      } else {
        if (response.status === 200) {
          toast.success(response.data.message);
        } else {
          toast.warning(response.data.message);
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
