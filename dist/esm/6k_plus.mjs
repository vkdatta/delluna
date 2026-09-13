export const name="6k_plus";
export const id="dl_ba64b35fac9a49bb8cae";
export const url=new URL("../icons/6/6k_plus.svg?v=646de63445490bad5e7f558fb3fd06d859c9c1d5630a0b6de4b444c6aa454688",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
