export const name="lucid_3-road";
export const id="dl_dac779fc47844aeaa653";
export const url=new URL("../icons/lucid_3-road.svg?v=f807727aefc5ac4fc9ff33f6fb8bf6585d09a158668f0f84449fb937e1117b6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
