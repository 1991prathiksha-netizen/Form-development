//import .App.css;

/*function App() {
  return (
    <div className="App">
      <><h1>hello world!</h1></>
      <><p>welcome to me react application</p></>
    </div>
  );
}



function App() {
  return (
    <div className="App">
      <><h1>student name=(props,name)</h1></>
      <><h2>department name=(props,department)</h2></>
    </div>
  );
}
export default App;



function App() {
  Const [username,setusername] = unstate("")
  function submitform(){
    alert("welcome",username)
  }
return(
  <div>
  <h2>"student login"</h2>
  <input
  type="text"
  place holder = "enter ur name"
  onchange = ((e) -> setusername(e,target,value))/>
  <button onclick = (submitform) > login</button>
  </div>
  )


<html>
<head>
<body>
<form method="post" action="">
<h1>Login Form</h1>
</head>


<table>
<tr>
<td>Name</td>
<td><input type="Name" name="Name" value="" class="input"/></td>
</tr>

<tr>
<td>E-mail</td>
<td><input type="E-mail" name="E-mail" value="" class="input"/></td>
</tr>

<tr>
<td>Password</td>
<td><input type="Password" name="Password" value="" class="input"/></td>
</tr>

<tr>
<td></td>
<td><input type="submit" name="submit" value="submit" class="submit"/></td>
</tr>

</table>
</form>
</body>
</html>*/


import { useState } from "react";
function DueForm() {
  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [doj, setDoj] = useState("");
  const [course, setCourse] = useState("PHP");
  const [languages, setLanguages] = useState([]);
  const [message, setMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const handleLanguageChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setLanguages([...languages, value]);
    } else {
      setLanguages(languages.filter((lang) => lang !== value));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      account,
      phone,
      gender,
      doj,
      course,
      languages,
      message,
    });
    alert("Due Successful!");
  };
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h1 style={styles.h1}>Due Form</h1>
      <table style={styles.table}>
        <tbody>
          <tr>
            <td style={styles.td}>Student Name</td>
            <td style={styles.td}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
              />
            </td>
          </tr>
          <tr>
            <td style={styles.td}>Student Account</td>
            <td style={styles.td}>
              <input
                type="tel"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                style={styles.input}
              />
            </td>
          </tr>
          <tr>
            <td style={styles.td}>Student Phone</td>
            <td style={styles.td}>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={styles.input}
              />
            </td>
          </tr>
          <tr>
            <td style={styles.td}> Gender</td>
            <td style={styles.td}>
              <input
                type="radio"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
              <input
                type="radio"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
                style={{ marginLeft: "15px" }}
              />
              Female
            </td>
          </tr>
          <tr>
            <td style={styles.td}>Student DOJ</td>
            <td style={styles.td}>
              <input
                type="date"
                value={doj}
                onChange={(e) => setDoj(e.target.value)}
                style={styles.input}
              />
            </td>
          </tr>
          <tr>
            <td style={styles.td}>Course</td>
            <td style={styles.td}>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                style={styles.input}
              >
                <option value="Java">Java</option>
                <option value="python">python</option>
                <option value="C++">C++</option>
              </select>
            </td>
          </tr>
          <tr>
            <td style={styles.td}>Languages</td>
            <td style={styles.td}>
              <input
                type="checkbox"
                value="Tamil"
                onChange={handleLanguageChange}
              />
              Tamil
              <input
                type="checkbox"
                value="Malayalam"
                onChange={handleLanguageChange}
                style={{ marginLeft: "10px" }}
              />
              English
              <input
                type="checkbox"
                value="English"
                onChange={handleLanguageChange}
                style={{ marginLeft: "10px" }}
              />
              French
            </td>
          </tr>
          <tr>
            <td style={styles.td}>Message</td>
            <td style={styles.td}>
              <textarea
                rows="5"
                cols="30"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={styles.input}
              />
            </td>
          </tr>
          <tr>
            <td colspan="2" style={{ textAlign: "center",width:"400px" }}>
              <input
                type="submit"
                value="Register"
                style={{
                  ...styles.submitButton,
                  backgroundColor: isHovered ? "lavender" : "green",
                  color: isHovered ? "green" : "lavender",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
const styles = {
  form: {
    backgroundColor: "#F0FFF0",
    border: "2px solid black",
    borderRadius: "10px",
    width: "60%",
    margin: "auto",
    padding: "20px",
  },
  h1: {
    textAlign: "center",
    textDecoration: "underline",
    color: "black",
  },
  table: {
    width: "80%",
    margin: "auto",
  },
  td: {
    padding: "15px",
    fontSize: "18px",
    width: "300px",
  },
  input: {
    width: "230px",
    padding: "8px",
  },
  submitButton: {
    width: "250px",
    marginLeft: "270px",
    padding: "10px",
    borderRadius: "10px",
    border: "2px solid black",
    fontSize: "18px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backgroundColor:"light blue"
  },
};
export default DueForm;

