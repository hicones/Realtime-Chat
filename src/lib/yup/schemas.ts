import * as yup from "yup";

export const signupSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Invalid email"),
  user: yup.string().trim().required("User is required").min(3),
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&.*])(?=.{8,})/,
      "Must contain at least 8 characters, 1 uppercase, 1 number and 1 special character!"
    ),
  confirmPassword: yup
    .string()
    .trim()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Password must match"),
});

export const signinSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Invalid email"),
  password: yup.string().trim().required("Password is required"),
});

export const forgotSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Invalid email"),
});

export const resetSchema = yup.object().shape({
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&.*])(?=.{8,})/,
      "Must contain at least 8 characters, 1 uppercase, 1 number and 1 special character!"
    ),
  confirmPassword: yup
    .string()
    .trim()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Password must match"),
});
