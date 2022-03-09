import * as yup from "yup";

export const userSchema =yup.object().shape({
    age : yup.number("Invalid input").integer("Invalid input").positive("Invalid input").required(),
    gender: yup.string().required(),
    height: yup.number("Invalid input").positive("Invalid input").required(),
    weight: yup.number("Invalid input").positive("Invalid input").required(),
    vaccine:yup.string().required(),
    blood:yup.string().required(),
    livingArea: yup.string().required(),

})