export const name="music_video-fill";
export const id="dl_506158a8191a2a4f5251";
export const url=new URL("../icons/music_video-fill.svg?v=c0d966fa8606e074e39b93a65f504aa1c562492b1215efd22dacf3bc0e6b7932",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
