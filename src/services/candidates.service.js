import axios from 'axios';
import { toast } from 'react-toastify';

export const addCandidate = async (formValues, file) => {
  await axios
    .post('/candidates/add/candidate', formValues)
    .then((response) => {
      console.log(response);
      if (response.data.error) {
        toast.error('Error adding candidate');
      } else {
        if (response.status === 200) {
          toast.success(response.data.message);

          // Add candidate profile picture
          if (file) {
            let formData = new FormData();
            formData.append('file', file);

            var config = {
              method: 'put',
              url: `http://ec2-44-202-30-87.compute-1.amazonaws.com:8000/candidates/upload/${response.data.candidateID}`,
              headers: {
                'Content-Type': 'multipart/form-data',
              },
              data: formData,
            };

            axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        } else {
          toast.warning(response.data.message);
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
