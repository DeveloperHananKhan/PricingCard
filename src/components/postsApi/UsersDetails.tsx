import { usePostApi } from "./posts";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Skeleton,
  Pagination,
  Paper,
} from "@mui/material";

export const UserPostDetails = () => {
  const { detail, loading, error, page, setPage, currentItems, rows } =
    usePostApi();
  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <>
      {loading ? (
        <div>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={50}
            animation="wave"
            style={{ marginBottom: 10 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={50}
            animation="wave"
            style={{ marginBottom: 10 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={50}
            animation="wave"
            style={{ marginBottom: 10 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={50}
            animation="wave"
            style={{ marginBottom: 10 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={50}
            animation="wave"
            style={{ marginBottom: 10 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={50}
            animation="wave"
            style={{ marginBottom: 10 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={50}
            animation="wave"
            style={{ marginBottom: 10 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={50}
            animation="wave"
            style={{ marginBottom: 10 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={50}
            animation="wave"
            style={{ marginBottom: 10 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={50}
            animation="wave"
            style={{ marginBottom: 10 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={50}
            animation="wave"
            style={{ marginBottom: 10 }}
          />
        </div>
      ) : error ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>{error}</div>
      ) : (
        <>
          <TableContainer>
            <Table>
              <TableHead component={Paper} sx={{ cursor: "pointer" }}>
                <TableRow>
                  <TableCell>
                    <strong>Id</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Title</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Details</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentItems.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.title}</TableCell>
                    <TableCell>{user.body}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination
            count={Math.ceil(detail.length / rows)}
            page={page}
            onChange={handleChange}
            shape="rounded"
            variant="outlined"
            sx={{ 
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "& .MuiPaginationItem-root": { color: "gray" },
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          />
        </>
      )}
    </>
  );
};
