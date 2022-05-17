import React, { useState } from "react";
import styles from "./Contact.module.css";

const ContactCard = ({ id, imgUrl, name, email, phone }) => {
  const [toggle, isToggle] = useState(true);
  return (
    <>
      <div onClick={() => isToggle(!toggle)}>
        {toggle ? (
          <div className={styles.flex}>
            <img src={imgUrl} alt={name} className={styles.image} />
            <div>
              <h2 >{name}</h2>
              <p >{email}</p>
            </div>
          </div>
        ) : (
          <div className={styles.flex}>
            <img src={imgUrl} alt={name} className={styles.image} />
            <div>
              <h2 className={styles.name}>{name}</h2>
              <p className={styles.email}>{email}</p>
              <h5 className={styles.phone}>Ph.No: {phone}</h5>
            </div>
          </div>
        )}
      </div>
      <hr />
    </>
  );
};

export default ContactCard;
