import { Card, CardContent, Typography } from "@mui/material";
interface ErrorCardProps {
  message: string;
}
export const ErrorCard: React.FC<ErrorCardProps> = ({ message }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height:'90vh'
          
        }}
      >
        <Card
          style={{
            border: "1px solid red",
            backgroundColor: "#ffe6e6",
            margin: "10px 0",
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              style={{
                color: "red",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Error:
            </Typography>
            <Typography
              variant="body1"
              style={{
                color: "red",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              {message}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
