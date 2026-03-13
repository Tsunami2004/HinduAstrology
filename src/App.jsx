import { useState } from 'react'
import './App.css'
import AstrologyForm from './components/AstrologyForm'
import AstrologyProfile from './components/AstrologyProfile'

function App() {
  const [userProfile, setUserProfile] = useState(null)

  const handleProfileSubmit = (profileData) => {
    setUserProfile(profileData)
  }

  const handleReset = () => {
    setUserProfile(null)
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🌟 Hindu Astrology 🌟</h1>
        <p className="tagline">Discover Your Cosmic Identity</p>
      </header>

      <main className="app-main">
        {!userProfile ? (
          <AstrologyForm onSubmit={handleProfileSubmit} />
        ) : (
          <>
            <AstrologyProfile profile={userProfile} />
            <button className="reset-button" onClick={handleReset}>
              ↻ Check Another Profile
            </button>
          </>
        )}
      </main>

      <footer className="app-footer">
        <p>Based on traditional Hindu mythology and Vedic astrology principles</p>
      </footer>
    </div>
  )
}

export default App
