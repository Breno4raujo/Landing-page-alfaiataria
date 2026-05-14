/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FabricArchive from './pages/FabricArchive';
import Consultation from './pages/Consultation';
import Archive from './pages/Archive';
import Account from './pages/Account';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/fabric-science" element={<FabricArchive />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/atelier" element={<Consultation />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Layout>
    </Router>
  );
}
