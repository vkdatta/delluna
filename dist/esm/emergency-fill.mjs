export const name="emergency-fill";
export const id="dl_b65a92ec89b578bfa92e";
export const url=new URL("../icons/emergency-fill.svg?v=9bee74f0046409e32b085e24d1656846313914c49e804a2c1f399725858a37c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
