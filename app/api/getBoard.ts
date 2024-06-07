import type { IBoard } from "../../@types";
import { API_URL } from "../containts";

interface Props {
  page: number;
  pageSize: number;
  orderBy: string;
  keywords?: string;
}
export async function getBoards({
  page,
  pageSize,
  orderBy,
  keywords = "",
}: Props): Promise<IBoard[]> {
  try {
    const res = await fetch(
      `${API_URL}/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keywords}`
    );
    const json = await res.json();
    return json.list;
  } catch (e) {
    console.log(e);
    return [];
  }
}
