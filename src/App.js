import React, { useState } from 'react';
import './App.css'; 

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    fathername: '',
    email: '',
    password: '',
    hobbies: '',
    gender: '',
    language: '',
    dateofbirth: '',
    age: '',
    color: '#000000',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);

  };

  return (
    <form onSubmit={handleSubmit} className="animated-form">
     <h1>ADMISSION FORM</h1>
      <label>
        Name:
        <input type="text" name="name" value={formData.text1} onChange={handleChange} />
      </label>
       <br /> <br/>

      <label>
        Father name:
        <input type="text" name="Father name" value={formData.text2} onChange={handleChange} />
      </label>
      <br /> <br/>

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br /> <br/>

      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <br /> <br/>

      <label>
        Hobbies:
        <label>
        <input type="checkbox" name="Reading" checked={formData.checkbox} onChange={handleChange} />
        Reading
        </label>
        <label>
        <input type="checkbox" name="Drawing" checked={formData.checkbox} onChange={handleChange} />
        Drawing
        </label>
        <label>
        <input type="checkbox" name="Other" checked={formData.checkbox} onChange={handleChange} />
        Other
        </label>
      </label>
      <br /> <br/>

      <label>
        Gender:
        <label>
          <input type="radio" name="gender" value="Male" checked={formData.radio === 'Male'} onChange={handleChange} />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="Female" checked={formData.radio === 'Female'} onChange={handleChange} />
          Female
        </label>
      </label>
      <br /> <br/>

      <label>
        Courses:
        <select name="dropdown" value={formData.dropdown} onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="option1">Website Development 1</option>
          <option value="option2">Website Development 2</option>
        </select>
      </label>
      <br /> <br/>

      <label>
        Date Of Birth:
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
      </label>
      <br /> <br/>

      <label>
        Age:
        <input type="number" name="age" value={formData.number} onChange={handleChange} />
      </label>
      <br /> <br/>

      <label>
        Which color do you like?: 
        <input type="color" name="color" value={formData.color} onChange={handleChange} />
        <div style={{ backgroundColor: formData.color, width: '50px', height: '20px', marginTop: '10px' }}></div>
      </label>
      <br /> <br/>

      <button type="submit">Submit</button>
    </form>
  );
};


export default App;
