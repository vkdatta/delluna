export const name="car_gear-fill";
export const id="dl_878d1d6f302d7c40ca12";
export const url=new URL("../icons/car_gear-fill.svg?v=a80e0ef09afd8de2b0fd0802a6eeb8e4c33759e7c7d8fee51c0afe7dc3614fee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
