export const name="stethoscope-thin";
export const id="dl_3611401f8e0947f48811";
export const url=new URL("../icons/S/stethoscope-thin.svg?v=205f330039c2d7cf50a90c6f6184f601ab5a064909fa2926b780012dfc50e81e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
