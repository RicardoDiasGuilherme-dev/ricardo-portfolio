import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-identity">
          <strong>{profile.fullName}</strong>
          <span>{profile.title}</span>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href={`mailto:${profile.email}`}>Say hello</a>
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {profile.fullName}. All rights reserved.</span>
        <span>Built with curiosity. Made with React.</span>
      </div>
    </footer>
  )
}
