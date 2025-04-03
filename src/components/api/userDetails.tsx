import { useLocation } from "react-router-dom";
import {
  Email,
  Phone,
  Language,
  Business,
  Home,
  Person,
  Tag,
} from "@mui/icons-material";
import "../../index.css"; // Ensure you have the styles

export const UserDetails = () => {
  const location = useLocation();
  const user = location.state;

  if (!user) return <p>No user data found!</p>;

  return (
    <div className="user-details-container">
      <h2>User Details</h2>
      <div className="user-details">
        <p>
          <Tag className="user-icon" />
          <strong>ID:</strong> {user.id}
        </p>
        <p>
          <Person className="user-icon" />
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <Email className="user-icon" />
          <strong>Email: </strong> {user.email}
        </p>
        <p>
          <Phone className="user-icon" />
          <strong>Phone: </strong> {user.phone}
        </p>
        <p>
          <Language className="user-icon" />
          <strong>Website: </strong> {user.website}
        </p>
        <p>
          <Business className="user-icon" />
          <strong>Company: </strong> {user.company.name}
        </p>
        <p>
          <Home className="user-icon" />
          <strong>Address: </strong> {user.address.street}, {user.address.city},{" "}
          {user.address.zipcode}
        </p>
      </div>
    </div>
  );
};
