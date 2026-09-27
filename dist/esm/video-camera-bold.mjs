export const name="video-camera-bold";
export const id="dl_a2420199966e5d9109bb";
export const url=new URL("../icons/video-camera-bold.svg?v=3e77ae64511827e2e6f0b1d4e8079f78d89d0fdb34e05c50d0c89730c66e2259",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
