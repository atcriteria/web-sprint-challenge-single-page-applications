import * as yup from "yup";

export default yup.object().shape({
    name: yup
    .string()
    .required("You must enter a name")
    .min(2, "Name must be at least 2 chars long"),
    size: yup
    .string()
    .oneOf(["small", "medium", "large"], "Size is required"),

    topping1: yup.boolean(),
    topping2: yup.boolean(),
    topping3: yup.boolean(),
    topping4: yup.boolean(),
    topping5: yup.boolean(),
    topping6: yup.boolean()
})