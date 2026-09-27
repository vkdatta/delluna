export const name="flash_off-fill";
export const id="dl_b7e808e3b60994adfc60";
export const url=new URL("../icons/flash_off-fill.svg?v=56455034a8a5ed7c94ca18e93c589647bab658c1bd47f76bc9f3696c9c56be03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
