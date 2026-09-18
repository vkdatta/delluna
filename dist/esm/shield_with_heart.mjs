export const name="shield_with_heart";
export const id="dl_14899b4fb4b043fda5b1";
export const url=new URL("../icons/S/shield_with_heart.svg?v=5eb464c16c161276fa1e45bfe80b9828a104d71618cb9ee558dfea16785323a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
