export const name="pause-circle-bold";
export const id="dl_db455caf8fce432caef1";
export const url=new URL("../icons/pause-circle-bold.svg?v=a367ea7ab53b6b78a1560ea3a7377b48e865897c62ef4d29589d6703a1df84e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
