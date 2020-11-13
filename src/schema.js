import * as yup from "yup";

export default yup.object().shape({
    name: yup
    .string()
    .required("You must enter a name")
    .min(3, "Name must be at least 2 chars long"),
    portion: yup
    .string()
    .oneOf(["small", "medium", "large"], "Size is required"),
    instructions: yup
    .string()
    .notRequired(),

    topping1: yup
    .boolean()
    .notRequired(),
    topping2: yup.boolean().notRequired(),
    topping3: yup.boolean().notRequired(),
    topping4: yup.boolean().notRequired(),
    topping5: yup.boolean().notRequired(),
    topping6: yup.boolean().notRequired()
})