import { USER_ROLE, USER_STATUS } from "./user.constant";

export interface TUser {
  _id: string;
  name: string;
  email: string;
  password: string;

  role: keyof typeof USER_ROLE;
  status: keyof typeof USER_STATUS;

  isVerified?: boolean;
  refreshTokens?: string[];
}
