export const name="local_atm";
export const id="dl_57ac3ad9f21edf906750";
export const url=new URL("../icons/local_atm.svg?v=ad72f76c2d42edad58003950d2955fdacff96b3481edfb77bd9eb47470a1306d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
