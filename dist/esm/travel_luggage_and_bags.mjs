export const name="travel_luggage_and_bags";
export const id="dl_8a9ef35ca1561e6d53c4";
export const url=new URL("../icons/travel_luggage_and_bags.svg?v=2e2c657fd14784afed518bb14c1bf1f3e88caaf8a1709295956050e0060b3c7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
