import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

function Card({ entry, setEntries }) {
  const [comment, setComment] = useState('');
  const { name, contact, proposal, comments } = entry;

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const updatedEntry = { ...entry, comments: [...comments, comment] };
    setEntries((prevEntries) =>
      prevEntries.map((e) => (e === entry ? updatedEntry : e))
    );
    setComment('');
  };

  const handleDelete = () => {
    setEntries((prevEntries) => prevEntries.filter((e) => e !== entry));
  };

  return (
    <div className="p-4 border rounded shadow relative">
      <button
        onClick={handleDelete}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
      >
        <FaTrash />
      </button>
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm">{contact}</p>
      <p>{proposal}</p>
      <div className="mt-4">
        <h3 className="text-md font-semibold">Comments</h3>
        <ul className="mb-2">
          {comments.map((comment, index) => (
            <li key={index} className="text-sm">{comment}</li>
          ))}
        </ul>
        <form onSubmit={handleCommentSubmit} className="flex">
          <input
            type="text"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Add a comment"
            className="p-2 border rounded w-full"
          />
          <button type="submit" className="bg-green-500 text-white p-2 rounded ml-2">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Card;
