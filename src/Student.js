import React, { useState } from 'react';
import './Student.css'; // Nhập file CSS để thực hiện kiểu

const Student = ({ id, name, image, email }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={`student-card ${showDetails ? 'expanded' : ''}`}>
      <img src={image} alt={`Sinh viên ${id}`} />
      <div>
        <h3>{name}</h3>
        <p>ID: {id}</p>
        <p>Email: {email}</p>
        {/* Nút để chuyển đổi chi tiết bổ sung */}
        <button onClick={toggleDetails}>
          {showDetails ? 'Ẩn Chi Tiết' : 'Hiện Chi Tiết'}
        </button>
        {/* Chi tiết bổ sung */}
        {showDetails && <p>Xin chào!</p>}
      </div>
    </div>
  );
};

export default Student;