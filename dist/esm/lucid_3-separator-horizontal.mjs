export const name="lucid_3-separator-horizontal";
export const id="dl_655b581df49941dea478";
export const url=new URL("../icons/lucid_3-separator-horizontal.svg?v=54f0862b85925272d0dbb52c3b5219415fec32a55f8b934bac5857b1c5fcf6df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
