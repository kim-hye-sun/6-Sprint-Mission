"use client";
import { getBoards } from "@/app/api/getBoard";
import styles from "@/styles/boardList.module.css";
import BoardItem from "./boardItem";
import { IBoard } from "@/@types";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function BoardList() {
  const [boards, setBoards] = useState<IBoard[]>([]);
  const [order, setOrder] = useState("recent");
  const [search, setSearch] = useState("");

  const onChangeOrder = (value: string) => {
    setOrder(value);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchBoard(order, search);
    }, 250); // 250ms 디바운싱 적용

    return () => clearTimeout(timer); // 이전 타이머 해제
  }, [order, search]);

  const fetchBoard = async (order: string, search: string) => {
    const fetchedboard = await getBoards({
      page: 1,
      pageSize: 10000,
      orderBy: order,
      keywords: search,
    });
    setBoards(fetchedboard);
  };

  return (
    <div>
      <div className={styles.boardListHeader}>
        <h3>게시글</h3>
        <button type="button">글쓰기</button>
      </div>
      <div className={styles.boardListSearch}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="검색할 상품을 입력해주세요"
            onChange={onChangeInput}
          />
          <Image
            src="/images/ic_search.png"
            alt="search icon"
            width={15}
            height={15}
          />
        </div>
        <select
          onChange={(e) => {
            onChangeOrder(e.target.value);
          }}
        >
          <option value="recent">최신순</option>
          <option value="like">좋아요순</option>
        </select>
      </div>
      <div className={styles.boardListContents}>
        {boards.map((board) => {
          return <BoardItem key={board.id} board={board} />;
        })}
      </div>
    </div>
  );
}
