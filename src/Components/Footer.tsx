import axios from "axios";

// Định nghĩa kiểu cho response dữ liệu (nếu cần)
interface LoginResponse {
  // Thay đổi cấu trúc theo phản hồi thực tế của API
  token: string;
  user: {
    id: number;
    email: string;
  };
}

// Định nghĩa kiểu cho userData
interface UserData {
  password: string;
  email: string;
}

// Khởi tạo client API (thay thế bằng cấu hình của bạn)
const apiClient = axios.create({
  baseURL: "https://api.example.com", // Thay bằng URL của API bạn sử dụng
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (
  userData: UserData
): Promise<LoginResponse | null> => {
  try {
    const response = await apiClient.post<LoginResponse>("/users", userData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error message:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    return null; // Trả về null nếu có lỗi
  }
};
