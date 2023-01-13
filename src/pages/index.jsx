import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState({});
  const onSubmit = (e) => {
    e.preventDefault();

    if (!id || !pass) return;

    /**
     * production : {name: "Leanne Graham"}
     */
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => setUser(json));
  };
  return (
    <>
      <main className={styles.main}>
        {user.name && <h1>{user.name}</h1>}
        <div className={styles.center}>
          <form className={styles.form} onSubmit={onSubmit}>
            <label className={styles.label}>
              <div>ID</div>
              <input
                name="id"
                className={styles.input}
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </label>
            <label className={styles.label}>
              <div>Password</div>
              <input
                name="pass"
                className={styles.input}
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </label>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
