import * as Yup from "yup";

const tinifyValidation = Yup.object().shape({
    sourceUrl:Yup.string().url("Please enter a valid url").required()
})

export default tinifyValidation;
