export type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  city?: string;
  state?: any;
  country?: string;
  occupation?: string;
  phoneNumber?: string;
  transactions?: string[];
  role: string;
};
