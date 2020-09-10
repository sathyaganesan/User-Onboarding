import React from "react";

const UserCard = (props) => {
    console.log(props);
  return (
    <div>
          <h2>User Card</h2>
          {/* {props.userAttr.map(item => (
              <div key = {item.id}>
                  <h3>{item.name}</h3>
                  <p>{item.email}</p>
                  <p>{item.role}</p>
                </div>
          ))} */}
    </div>
  );
};

export default UserCard;
