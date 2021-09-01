import "./Card.css";

const UserCard = ({ user }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img"
          loading="lazy"
          src={user.avatar}
          alt="avatar"
        />
      </div>
      <div className="card-content">
        <h5 className="name">{user.first_name} {user.last_name}</h5>
        <div className="email">{user.email}</div>
      </div>
    </div>
  );
};

export default UserCard;
