import { useUserApi } from "./api"
import { useNavigate } from "react-router-dom";
import "../../index.css"
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Skeleton,
  } from "@mui/material";
 


export const UserData =()=>{
    const {users,loading,error}=useUserApi();
    const navigate = useNavigate();
return(<>
<div>        
    
        {loading ? (    
         <div style={{ textAlign: "center", marginTop: "20px" }}>
      
         <Skeleton variant="rectangular" width="100%" height={50} animation="wave" style={{ marginBottom: 10 }} />
         <Skeleton variant="rectangular" width="100%" height={50} animation="wave" style={{ marginBottom: 10 }} />
         <Skeleton variant="rectangular" width="100%" height={50} animation="wave" style={{ marginBottom: 10 }} />
         <Skeleton variant="rectangular" width="100%" height={50} animation="wave" style={{ marginBottom: 10 }} />
         <Skeleton variant="rectangular" width="100%" height={50} animation="wave" style={{ marginBottom: 10 }} />
         <Skeleton variant="rectangular" width="100%" height={50} animation="wave" style={{ marginBottom: 10 }} />
         <Skeleton variant="rectangular" width="100%" height={50} animation="wave" style={{ marginBottom: 10 }} />
         <Skeleton variant="rectangular" width="100%" height={50} animation="wave" style={{ marginBottom: 10 }} />
         <Skeleton variant="rectangular" width="100%" height={50} animation="wave" style={{ marginBottom: 10 }} />
         <Skeleton variant="rectangular" width="100%" height={50} animation="wave" style={{ marginBottom: 10 }} />
         
    
       </div>
        ) : 
        error ? ( <div style={{ textAlign: "center", marginTop: "20px" }}>{error}</div> ) : (
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
                  <TableRow key={user.id} onClick={() => navigate(`/userDetails/${user.id}`,{state:user})} 
                  style={{ cursor: "pointer" }}>
                    <TableCell className="truncate">{user.id}</TableCell>
                    <TableCell className="truncate">{user.name}</TableCell>
                    <TableCell className="truncate">{user.username}</TableCell>
                    <TableCell className="truncate">{user.email}</TableCell>
                    <TableCell className="truncate">{user.phone}</TableCell>
                    <TableCell className="truncate">{user.website}</TableCell>
                    <TableCell className="truncate">{user.company.name}</TableCell>
                    <TableCell className="truncate">
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