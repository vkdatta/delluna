export const name="headset_mic";
export const id="dl_d18369bec79473128495";
export const url=new URL("../icons/headset_mic.svg?v=0cf8c442538fc7370f6e6165c30ed6b47d09c910f6a5fb8684b5f7e19d14e691",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
