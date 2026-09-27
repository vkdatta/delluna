export const name="delivery_truck_bolt-fill";
export const id="dl_fc5cda2e1e4d14c0a796";
export const url=new URL("../icons/delivery_truck_bolt-fill.svg?v=11c0c151156b61ee6bfa25c2e9ff6e80ab7a872e5da562a6d99f9818ee9eff7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
