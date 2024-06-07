import Image from "next/image";
import type { IBoard } from "../@types";
import styles from "../styles/bestBoard.module.css";

export default function BestBoard({ board }: { board: IBoard }) {
  const createdAt = board.createdAt.split("T");
  return (
    <div key={board.id} className={styles.bestList}>
      <Image
        src="/images/img_badge.png"
        alt="badge"
        width={102}
        height={30}
        className={styles.bestBadge}
      />
      <div className={styles.bestListContent}>
        <p>{board.title}</p>
        {board.image && (
          <Image src={board.image} alt={board.title} width={72} height={72} />
        )}
      </div>
      <div className={styles.bestListFoot}>
        <div>
          <span>{board.writer.nickname}</span>
          <span>
            <Image
              src="/images/img_like.png"
              alt="like"
              width={13}
              height={12}
            />
            {board.likeCount}
          </span>
        </div>
        <span>{createdAt[0]}</span>
      </div>
    </div>
  );
}
