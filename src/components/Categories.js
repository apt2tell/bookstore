import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.categories);
  // handler for check status
  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="check-status">
      <button onClick={handleCheckStatus} type="button">Check Status</button>
      <span className="status">{status}</span>
    </div>
  );
};

export default Categories;
