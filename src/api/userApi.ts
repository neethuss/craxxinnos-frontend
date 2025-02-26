import axios from "axios";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
  },
});

export const createUser = async (email: string, mobileNumber: string, password: string) => {
  try {
    const response = await axiosInstance.post("/user", {
      email,
      mobileNumber,
      password,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const updatePersonalInfo = async (email: string, title?: string, fullName?: string, dob?: string, currentAddress?: string, livedDuration?: string, aboutYou?: string ) => {
  try {
    console.log(email, "email");
    
    const response = await axiosInstance.patch(`/user/${email}`, {
      title,
      fullName,
      dob,
      currentAddress,
      livedDuration,
      aboutYou,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const updateFinancialInfo = async (email: string, employmentStatus?: string, additionalSavings?: string ) => {
  try {
    const response = await axiosInstance.patch(`/user/${email}`, {
      employmentStatus, 
      additionalSavings,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (email: string) => {
  try {
    const response = await axiosInstance.get(`/user/${email}`);

    return response;
  } catch (error) {
    throw error;
  }
};
