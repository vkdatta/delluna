export const name="gear-fine";
export const id="dl_83adccf2e93546b4a63d";
export const url=new URL("../icons/gear-fine.svg?v=ca000a36662d0049d39ea5cbe44a0133960d791dd95dd1929692211355fac4e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
