export const name="emergency_recording-fill";
export const id="dl_d22305418baa51c2f039";
export const url=new URL("../icons/emergency_recording-fill.svg?v=36ba0bc059fe66d6e1ec564e7e2ffbbb77edf03e0b3bd6d8e4ea0e83b56d0881",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
