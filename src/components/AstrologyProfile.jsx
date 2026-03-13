import { rashiData } from '../data/rashiData'
import { nakshatraData } from '../data/nakshatraData'
import './AstrologyProfile.css'

function AstrologyProfile({ profile }) {
  const rashi = rashiData[profile.rashi]
  const nakshatra = nakshatraData[profile.nakshatra]

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2 className="profile-name">{profile.name}</h2>
        <p className="profile-intro">Your Cosmic Journey</p>
      </div>

      <div className="profile-cards">
        {/* Rashi Card */}
        <div className="profile-card rashi-card">
          <div className="card-header">
            <h3>Your Rashi</h3>
            <span className="symbol">{rashi.symbol}</span>
          </div>
          <div className="card-content">
            <div className="info-item">
              <span className="label">Rashi Name:</span>
              <span className="value">{rashi.name}</span>
            </div>
            <div className="info-item">
              <span className="label">Sanskrit Name:</span>
              <span className="value">{rashi.sanskrit}</span>
            </div>
            <div className="info-item">
              <span className="label">Ruling Planet:</span>
              <span className="value">{rashi.ruler}</span>
            </div>
            <div className="info-item">
              <span className="label">Element:</span>
              <span className="value">{rashi.element}</span>
            </div>
            <div className="info-item">
              <span className="label">Deity:</span>
              <span className="value">{rashi.deity}</span>
            </div>
            <div className="info-item">
              <span className="label">Lucky Color:</span>
              <span className="value">{rashi.color}</span>
            </div>
            <div className="info-item">
              <span className="label">Lucky Number:</span>
              <span className="value">{rashi.lucky_number}</span>
            </div>
            <div className="traits">
              <span className="label">Traits:</span>
              <p className="traits-text">{rashi.traits}</p>
            </div>
            <div className="description">
              <p>{rashi.description}</p>
            </div>
            <div className="mantra">
              <h4>🕉️ Sacred Mantra</h4>
              <p>{rashi.mantra}</p>
            </div>
            <div className="interesting-facts">
              <h4>✨ Interesting Facts</h4>
              <ul>
                {rashi.interesting_facts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Nakshatra Card */}
        <div className="profile-card nakshatra-card">
          <div className="card-header">
            <h3>Your Nakshatra</h3>
            <span className="symbol">🌙</span>
          </div>
          <div className="card-content">
            <div className="info-item">
              <span className="label">Nakshatra Name:</span>
              <span className="value">{nakshatra.name}</span>
            </div>
            <div className="info-item">
              <span className="label">Number:</span>
              <span className="value">{nakshatra.number}/27</span>
            </div>
            <div className="info-item">
              <span className="label">Ruling Planet:</span>
              <span className="value">{nakshatra.ruler}</span>
            </div>
            <div className="info-item">
              <span className="label">Deity:</span>
              <span className="value">{nakshatra.deity}</span>
            </div>
            <div className="info-item">
              <span className="label">Symbol:</span>
              <span className="value">{nakshatra.symbol}</span>
            </div>
            <div className="info-item">
              <span className="label">Element:</span>
              <span className="value">{nakshatra.element}</span>
            </div>
            <div className="traits">
              <span className="label">Traits:</span>
              <p className="traits-text">{nakshatra.traits}</p>
            </div>
            <div className="mantra">
              <p>🕉️ {nakshatra.mantra}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Compatibility Info */}
      <div className="compatibility-card">
        <h3>🌟 Cosmic Harmony</h3>
        <p>
          Your {rashi.name} Rashi combined with {nakshatra.name} Nakshatra creates a
          unique cosmic identity. You are blessed by {rashi.deity} and guided by{' '}
          {nakshatra.deity}.
        </p>
      </div>
    </div>
  )
}

export default AstrologyProfile
