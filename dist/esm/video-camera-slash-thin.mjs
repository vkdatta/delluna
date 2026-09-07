export const name="video-camera-slash-thin";
export const id="dl_5aaefccb011e4625a0dd";
export const url=new URL("../icons/V/video-camera-slash-thin.svg?v=8e1889d5e8d0d4a02c7e2cc4637986b717d99c586e8a98bdaae66c7fac7ed164",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
