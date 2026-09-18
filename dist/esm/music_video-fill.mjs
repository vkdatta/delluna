export const name="music_video-fill";
export const id="dl_f52281d439c2456e9c3d";
export const url=new URL("../icons/M/music_video-fill.svg?v=9bcab2b616361822c8f90c2d7103dbd92c7736c3e755180d9e72265edf40bf16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
