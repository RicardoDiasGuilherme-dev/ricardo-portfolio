import { assets, profile } from '../data/portfolio'
import Icon from '../components/Icon'
import useLocalAsset from '../hooks/useLocalAsset'

export default function Hero() {
  const portrait = useLocalAsset(assets.portrait)
  const nameParts = profile.fullName.split(' ')

  return (
    <section
      id="home"
      className="hero"
      aria-labelledby="hero-title"
      tabIndex={-1}
    >
      <div className="hero-glow" aria-hidden="true" />
      <div className="container">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="hero-greeting">Hello, I’m</p>
            <h1 id="hero-title">
              {nameParts.slice(0, -1).join(' ')}{' '}
              <span>{nameParts.at(-1)}</span>
            </h1>
            <p className="hero-role">{profile.title}</p>
            <p className="hero-focus">{profile.focus}</p>
            <p className="hero-intro">{profile.introduction}</p>
          </div>
          {portrait.url && (
            <div className="hero-portrait">
              <div className="hero-portrait-frame">
                <img
                  src={portrait.url}
                  alt={`Portrait of ${profile.fullName}`}
                  onError={portrait.markUnavailable}
                />
              </div>
            </div>
          )}
        </div>
        <div className="hero-summary">
          <div>
            <Icon name="book" />
            <p><span>THE FOUNDATION</span>Computer Science</p>
          </div>
          <div>
            <Icon name="server" />
            <p><span>THE FOCUS</span>Learning backend development and cybersecurity</p>
          </div>
          <div>
            <Icon name="users" />
            <p><span>THE NEXT STEP</span>A curricular internship</p>
          </div>
        </div>
      </div>
    </section>
  )
}
