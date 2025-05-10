import { useState } from 'react';
import "./contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    time: "",
    age: "",
    gender: ""
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.age) newErrors.age = "Age is required";
    if (!formData.gender) newErrors.gender = "Gender is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowPopup(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        date: "",
        time: "",
        age: "",
        gender: ""
      });
      setErrors({});
    }
  };

  return (
    <div className="site-wrap" id="home-section">
      <div className="site-section bg-light" id="contact-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 intro downward-heading text-center">
              <h1 className="text-dark">Schedule your appointment</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 mb-5">
              <form onSubmit={handleSubmit}>
                <div className="form-group row">
                  <div className="col-md-6 mb-4 mb-lg-0">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12 mb-3">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <small className="text-danger">{errors.phone}</small>}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Select Appointment Date and Time</label>
                    <input
                      type="date"
                      name="date"
                      className="form-control"
                      value={formData.date}
                      onChange={handleChange}
                    />
                    {errors.date && <small className="text-danger">{errors.date}</small>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <div style={{ height: "32px" }}></div>
                    <select
                      name="time"
                      className="form-control"
                      value={formData.time}
                      onChange={handleChange}
                    >
                      <option value="">Select time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">5:00 PM</option>
                      <option value="2:00 PM">6:00 PM</option>
                      <option value="3:00 PM">7:00 PM</option>
                      <option value="4:00 PM">7:30 PM</option>
                    </select>
                    {errors.time && <small className="text-danger">{errors.time}</small>}
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="number"
                      name="age"
                      className="form-control"
                      placeholder="Age"
                      value={formData.age}
                      onChange={handleChange}
                      min="0"
                    />
                    {errors.age && <small className="text-danger">{errors.age}</small>}
                  </div>

                  <div className="col-md-6 mb-3">
                    <select
                      name="gender"
                      className="form-control"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Transgender">Transgender</option>
                      <option value="Non-binary">Non-binary</option>
                    </select>
                    {errors.gender && <small className="text-danger">{errors.gender}</small>}
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Write your message."
                      cols={30}
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && <small className="text-danger">{errors.message}</small>}
                  </div>
                </div>

                <div className="form-group row  justify-content-center">
                  <div className="col-md-6 text-center">
                    <input
                      type="submit"
                      className="btn btn-block btn-primary text-white py-3 px-5"
                      value="Send Message"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h4>Your appointment has been booked successfully!</h4>
            <button className="btn btn-primary mt-3" onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Contact;
