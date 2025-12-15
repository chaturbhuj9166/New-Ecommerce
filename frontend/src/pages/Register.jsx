import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import "./Register.css";

function Register() {


   const [captchaValue, setCaptchaValue] = useState(null);

 
  const [data, setData] = useState({
    name: "",
    phone: "",
    username: "",
    email: "",
    password: "",
    role:"User"

  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/user/register",
        data
      );

      toast.success("🎉 User Registered Successfully!", {
        position: "top-center",
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (error) {
      toast.error(error.response?.data?.message || "Registration Failed!", {
        position: "top-center",
      });
    }
  }
   function onChange(value) {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
  }

  return (
    <div className="register-box">
      <h2>Register To Our E-commerce</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={data.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input type="text" name="phone" value={data.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" value={data.username} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={data.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={data.password} onChange={handleChange} required />

        </div>
         
      <ReCAPTCHA
        sitekey="6LdCXCksAAAAAEdG2Hn1fYUzc6LMUnwNS-iA4gB8"
        onChange={onChange}
      />

        <button type="submit">Register</button>
      </form>

      <ToastContainer />
    </div>
  );
}

export default Register;
