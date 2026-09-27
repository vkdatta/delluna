export const name="spatial_audio_off-fill";
export const id="dl_15d0eac372874a23c087";
export const url=new URL("../icons/spatial_audio_off-fill.svg?v=4320a555311c5e088c6913f7702b6a8446101ce386f680a96b27b23dcd98ea42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
