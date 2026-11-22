import { useState } from 'react'
import { assets } from '../data/portfolio'
import useLocalAsset from '../hooks/useLocalAsset'
import Icon from '../components/Icon'
import SectionHeading from '../components/SectionHeading'

export default function VideoPitch() {
  const video = useLocalAsset(assets.video)
  const [durationValid, setDurationValid] = useState(false)

  function validateDuration(event) {
    const duration = event.currentTarget.duration
    if (!Number.isFinite(duration) || duration <= 0 || duration > 60) {
      event.currentTarget.pause()
      video.markUnavailable()
      return
    }
    setDurationValid(true)
  }

  return (
    <section
      id="video-pitch"
      className="section section-tinted"
      aria-labelledby="pitch-title"
      tabIndex={-1}
    >
      <div className={video.url ? 'container pitch-layout' : 'container'}>
        <div className="pitch-copy">
          <SectionHeading
            id="pitch-title"
            eyebrow="BEYOND THE PROFILE"
            title={<>Get to <span className="text-accent">Know Me.</span></>}
          >
            The person behind the code, in one minute.
          </SectionHeading>
          <p>
            A short introduction to my studies, the way I approach challenges, and
            what I hope to bring to a development team.
          </p>
          <div className="pitch-detail">
            <Icon name="users" size={19} />
            <span>A personal introduction</span>
            <span className="duration-badge">Up to 1 min</span>
          </div>
        </div>
        {video.url && (
          <div className="video-area surface">
            <video
              className="pitch-video"
              controls={durationValid}
              playsInline
              preload="metadata"
              aria-label="Personal introduction by Ricardo Guilherme"
              aria-describedby="video-description"
              onLoadedMetadata={validateDuration}
              onError={() => video.markUnavailable()}
            >
              <source
                src={video.url}
                type="video/mp4"
                onError={() => video.markUnavailable()}
              />
              {assets.captions && (
                <track
                  kind="captions"
                  src={assets.captions}
                  srcLang="en"
                  label="English"
                  default
                />
              )}
              Your browser does not support embedded video.
            </video>
            {!durationValid && (
              <p className="video-loading" role="status">
                Preparing the introduction…
              </p>
            )}
            <p id="video-description" className="sr-only">
              A personal introduction by Ricardo Guilherme about his Computer Science
              studies, strengths, and search for a curricular internship in software development.
              Maximum duration: one minute.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
