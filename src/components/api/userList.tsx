import { useUserApi } from "./api"
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    CircularProgress,
  } from "@mui/material";


export const UserData =()=>{
    const {users,loading}=useUserApi()
return(<>
<div>
        {loading ? (
         <CircularProgress size={80} 
         style={{ 
           margin: "auto", 
           display: "block", 
           position: "absolute", 
           top: "40%", 
           left: "50%", 
           transform: "translate(-50%, -50%)" }} />
        ) : (
            <TableContainer component={Paper} style={{ marginTop: "20px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>ID</strong></TableCell>
                  <TableCell><strong>Name</strong></TableCell>
                  <TableCell><strong>Username</strong></TableCell>
                  <TableCell><strong>Email</strong></TableCell>
                  <TableCell><strong>Phone</strong></TableCell>
                  <TableCell><strong>Website</strong></TableCell>
                  <TableCell><strong>Company</strong></TableCell>
                  <TableCell><strong>Address</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.website}</TableCell>
                    <TableCell>{user.company.name}</TableCell>
                    <TableCell>
                      {user.address.street}, {user.address.city}, {user.address.zipcode}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
</>)
}