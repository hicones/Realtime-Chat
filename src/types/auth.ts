export interface SigninCreadentials {
  email: string;
  password: string;
}

export interface SignupCreadentials {
  email: string;
  user: string;
  password: string;
  confirmPassword: string;
}

export interface ForgotPasswordCreadentials {
  email: string;
}

export interface ResetPasswordCreadentials {
  password: string;
  confirmPassword: string;
}
