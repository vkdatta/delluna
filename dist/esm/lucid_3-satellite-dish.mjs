export const name="lucid_3-satellite-dish";
export const id="dl_86c47c89e43a465cb48d";
export const url=new URL("../icons/lucid_3-satellite-dish.svg?v=14d0a3f23bb804fb1f3f239a61df15b708e373c47f0e5d95953e13086e9f1e24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
