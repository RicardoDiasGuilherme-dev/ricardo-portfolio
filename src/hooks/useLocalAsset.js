import { useState } from 'react'

// Assets are discovered by Vite at startup/build; also handle a failed request.
export default function useLocalAsset(url) {
  const [failedUrl, setFailedUrl] = useState(null)
  return { url: url && url !== failedUrl ? url : null, markUnavailable: () => setFailedUrl(url) }
}
