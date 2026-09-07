export const name="video-camera-slash-duotone";
export const id="dl_f89246cdf99a41479986";
export const url=new URL("../icons/V/video-camera-slash-duotone.svg?v=0ca984359e313f08c697deadb18e6d0afb9662ab144a8bcda56f8f1d46503415",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
