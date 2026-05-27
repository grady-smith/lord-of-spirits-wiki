import { QuartzComponent, QuartzComponentConstructor } from "./types"

const AudioInterceptor: QuartzComponent = () => {
  return null
}

AudioInterceptor.afterDOMLoaded = `
document.addEventListener("click", (e) => {
  const target = e.target.closest('a');
  if (target && target.href && target.href.includes("media.ancientfaith.com") && target.href.includes(".mp3")) {
    e.preventDefault();
    const url = new URL(target.href);
    const playerUrl = '/static/player.html?audio=' + encodeURIComponent(url.origin + url.pathname) + url.hash;
    window.open(playerUrl, '_blank');
  }
});
`

export default (() => AudioInterceptor) satisfies QuartzComponentConstructor
