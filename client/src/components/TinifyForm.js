import { useState } from "react";
import { useFormik } from "formik";
import tinifyValidation from "../validations/tinify";
import Loading from "./ui/Loading";
import Result from "./ui/Result";
import Error from "./ui/Error";
function TinifyForm(props) {
  const axios = require("axios").default;
  const [formIsLoading, setFormIsLoading] = useState(false);
  const [serverResponseUrl, setServerResponseUrl] = useState("");
  const [formError, setFormError] = useState(false);
  //   const [dataIsReceived, setDataIsReceived] = useState(false);

  const resetAllStates = () => {
    setFormError(false);
    setServerResponseUrl("");
    setFormIsLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      sourceUrl: "",
    },
    validationSchema: tinifyValidation,
    onSubmit: (values) => {
      //reset all states on submitting
      setFormError(false);
      setServerResponseUrl("");
      setFormIsLoading(true);
      axios
        .post(`${window.location.origin}/api/addUrl`, {
          sourceUrl: values.sourceUrl,
        })
        .then((response) => {
          setFormIsLoading(false);
          setServerResponseUrl(response.data);
          //   setDataIsReceived(true);
        })
        .catch(() => {
          setFormError(true);
        });
    },
  });
  return (
    <section className=" flex  items-center justify-center bg-blue-100 h-52 w-full">
      <form onSubmit={formik.handleSubmit}>
        {!formIsLoading && (
          <div className="flex flex-col md:flex-row space-x-7 items-center md ">
            <input
              type="text"
              name="sourceUrl"
              id="sourceUrl"
              placeholder="Enter your URL"
              className="shadow appearance-none border rounded-md   text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl w-96  h-14"
              {...formik.getFieldProps("sourceUrl")}
            />
            <button
              type="submit"
              className="rounded-lg border-2 border-transparent md:px-7 mt-4 w-32 h-14 md:mt-0 text-center text-white bg-violet-900  hover:bg-black"
            >
              Submit
            </button>
            {/* Loaded on input validation errors */}
            {formik.dirty &&
            formik.errors.sourceUrl &&
            formik.touched.sourceUrl ? (
              <div className="block">
                <p className="text-red-600 font-bold  text-xl mt-4 md:mt-0  ">
                  Please enter a valid URL{" "}
                </p>
              </div>
            ) : null}
          </div>
        )}
        {/* loaded when data is recevied from server  */}
        {serverResponseUrl !== "" && <Result data={serverResponseUrl} />}
        {/* reset errors state when catching errors from server */}
        {formError && (
          <Error
            onClick={resetAllStates}
            message="Yikes,something wrong happend"
            messageClasses="font-bold md:text-2xl text-xl"
            submessage="Click here to try again"
            submessageClasses="font-bold md:text-xl text-md text-red-500 hover:cursor-pointer hover:text-green-500"
            imgClasses="h-32 w-32"
          />
        )}
      </form>

      {formIsLoading && !formError && <Loading />}
    </section>
  );
}

export default TinifyForm;
