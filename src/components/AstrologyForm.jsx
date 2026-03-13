import { useState } from 'react'
import { rashiData, getRashiByMonth } from '../data/rashiData'
import { nakshatraList } from '../data/nakshatraData'
import './AstrologyForm.css'

function AstrologyForm({ onSubmit }) {
  const [name, setName] = useState('')
  const [rashi, setRashi] = useState('Aries')
  const [nakshatra, setNakshatra] = useState('Ashwini')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!name.trim()) {
      setError('Please enter your name')
      return
    }

    onSubmit({
      name: name.trim(),
      rashi,
      nakshatra,
    })
  }

  return (
    <div className="form-container">
      <form className="astrology-form" onSubmit={handleSubmit}>
        <h2>Enter Your Details</h2>

        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            className="form-input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="rashi">Rashi (Zodiac Sign)</label>
          <select
            id="rashi"
            className="form-select"
            value={rashi}
            onChange={(e) => setRashi(e.target.value)}
          >
            {Object.keys(rashiData).map((r) => (
              <option key={r} value={r}>
                {rashiData[r].symbol} {r} ({rashiData[r].sanskrit})
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="nakshatra">Nakshatra (Lunar Mansion)</label>
          <select
            id="nakshatra"
            className="form-select"
            value={nakshatra}
            onChange={(e) => setNakshatra(e.target.value)}
          >
            {nakshatraList.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="submit-button">
          Discover Your Profile ✨
        </button>
      </form>
    </div>
  )
}

export default AstrologyForm
