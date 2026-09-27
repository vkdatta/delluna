export const name="flash_on-fill";
export const id="dl_900af38f4a076133a656";
export const url=new URL("../icons/flash_on-fill.svg?v=2ccc486a1ba2b6ea0a2de935681bf214949be5b197bee0e2888b26b877043c69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
