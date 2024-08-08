import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card';

function Home({ entries, setEntries }) {
  const [form, setForm] = useState({ name: '', contact: '', proposal: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries([...entries, { ...form, comments: [] }]);
    setForm({ name: '', contact: '', proposal: '' });
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            placeholder="Contact"
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="mb-2">
          <textarea
            name="proposal"
            value={form.proposal}
            onChange={handleChange}
            placeholder="Proposal"
            className="p-2 border rounded w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {entries.map((entry, index) => (
          <Card key={index} entry={entry} setEntries={setEntries} />
        ))}
      </div>
    </div>
  );
}

function App() {
  const [entries, setEntries] = useState([]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <div className="bg-gray-200 p-4">
            <p className="text-center">
              Este é um trabalho de extensão por estudantes do IFTM Campus Ituiutaba o qual visa um protótipo funcional de um mural informativo para ajudar no comércio.
            </p>
          </div>
          <Routes>
            <Route path="/" element={<Home entries={entries} setEntries={setEntries} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
