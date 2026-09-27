export const name="road-fill";
export const id="dl_cda61495ad8712ecdc73";
export const url=new URL("../icons/road-fill.svg?v=cb9be09516f78cb31eada37641f411e527fe367f408cc814e65a3ea702f7eafb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
