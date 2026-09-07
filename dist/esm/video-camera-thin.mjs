export const name="video-camera-thin";
export const id="dl_76098eee180f43c681ec";
export const url=new URL("../icons/V/video-camera-thin.svg?v=daf4a3be3b5cb296457a0bd0dd229b37888ed9b3e4fdfcb7e02cde519dd5ebb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
