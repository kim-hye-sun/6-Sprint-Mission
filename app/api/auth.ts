import { ISignUpUser, IUser } from "@/@types";
import { API_URL } from "@/app/containts";

interface SignUpResponse {
  success: boolean;
  user: IUser;
  message: string;
}

//자유게시판 목록 API
export async function signUp(data: ISignUpUser): Promise<SignUpResponse> {
  try {
    const res = await fetch(`${API_URL}/auth/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    return {
      success: true,
      user: json,
      message: "회원 가입이 성공적으로 완료되었습니다.",
    };
  } catch (e) {
    return {
      success: false,
      user: {} as IUser,
      message: "회원 가입 중 오류가 발생했습니다. 다시 시도해주세요.",
    };
  }
}
