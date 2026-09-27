export const name="video-camera-slash";
export const id="dl_bed89ee35f92862ee848";
export const url=new URL("../icons/video-camera-slash.svg?v=fc84b3ad6d96b334014104432761def2e69e5de9c737685dacf35d054f6919f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
