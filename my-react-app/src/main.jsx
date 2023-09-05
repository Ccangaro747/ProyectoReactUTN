import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Components/Header/Header.jsx'
import CyberSecuritySection from './Components/CyberSecuritySection/CyberSecuritySection.jsx'
import SecurityThreats from './Components/SecurityThreats/SecurityThreats.jsx'
import ComprehensiveSecurity from './Components/ComprehensiveSecurity/ComprehensiveSecurity.jsx'
import NoHeadaches from './Components/NoHeadaches/NoHeadaches.jsx'
import PartnersContact from './Components/PartnersContact/PartnersContact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import '../src/Components/global.css'
import End from './Components/End/End.jsx'
import Copyright from './Components/Copyright/Copyright.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
    <CyberSecuritySection />
    <SecurityThreats />
    <ComprehensiveSecurity />
    <NoHeadaches />
    <PartnersContact />
    <Footer />
    <End />
    <Copyright />
  </React.StrictMode>,
)
