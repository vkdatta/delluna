export const name="shield_toggle";
export const id="dl_721a8d35a2294fd69849";
export const url=new URL("../icons/shield_toggle.svg?v=3312321f5e0708dacd5f557bc6d3cdfb294fa502b2077c4c2e9bcbff745fca7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
