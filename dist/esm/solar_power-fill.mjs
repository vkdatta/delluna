export const name="solar_power-fill";
export const id="dl_9ff6d0b8917632624b8a";
export const url=new URL("../icons/solar_power-fill.svg?v=387f163cd3a5902c1a8f197397215f346c93a54a980cb1a492bf4ab101f238fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
