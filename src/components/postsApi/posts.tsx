import { useEffect, useState } from "react";
innerWidth;
import { ErrorCard } from "../api/error.card/Error";
import { JSX } from "@emotion/react/jsx-runtime";
export interface UserPosts {
  id: number;
  title: string;
  body: string;
}

export const usePostApi = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<JSX.Element | null>(null);
  const [detail, setDetail] = useState<UserPosts[]>([]);
  const [page, setPage] = useState<number>(1);
  const [rows] = useState<number>(10);
 

  useEffect(() => {
    const postData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
        );

        if (response.ok) {
          const data: UserPosts[] = await response.json();
          console.log("details of data", response.ok);
          setDetail(data);
        } else {
          throw new Error("Unexpected response");
        }
      } catch (err: unknown) {
        console.error("There was an error:", err);
        setError(
          <ErrorCard
            message={err instanceof Error ? err.message : "Unknown error"}
          />
        );
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    };

    postData();
  }, [page]);

  return { detail, loading, error, page, setPage, rows };
};
