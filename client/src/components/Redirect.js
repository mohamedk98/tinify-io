import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Redirect() {
  const axios = require("axios").default;
  const navigate = useNavigate();
  const { urlId } = useParams(); //Read URL query id

  //get data before component rendering
  useEffect(() => {
    axios
      .get(`${window.location.origin}/${urlId}`)
      .then((response) => {
    
          //if there is response--> redirect to the url
          console.log(response.data)
          // window.location.replace(response.data);
          
        
      })
      .catch((error) => {
        //if there is an error-->redirect to 404
        console.log(error)
        navigate("/404");
       
      });
  });

  return;
}

export default Redirect;
