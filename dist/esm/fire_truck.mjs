export const name="fire_truck";
export const id="dl_64c33b96c21d620f330a";
export const url=new URL("../icons/fire_truck.svg?v=b2718fa58f17c4a90fb5e35c98b7b45870a0f9bb3e9b832f96da7df8c9eab6d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
