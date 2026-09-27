export const name="person-arms-spread-thin";
export const id="dl_dbd76282eb2d433788a6";
export const url=new URL("../icons/person-arms-spread-thin.svg?v=d02463a7c1f3b32db7b2f5ec141e7471024837d0259c1d83ecaadf18c5e1d392",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
