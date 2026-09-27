export const name="arrow_up";
export const id="dl_bd326f46d38e39b20133";
export const url=new URL("../icons/arrow_up.svg?v=1ba48e172a268f25de6db73f4174df9b744510e7a12f8c6a0c1a949ef67bcd30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
