export const name="local_pharmacy";
export const id="dl_2399affd38143c1b6331";
export const url=new URL("../icons/local_pharmacy.svg?v=ff709c8c22a6e2ba40f9a8f0a833986a33500af69cbc835056c79af0932ad18c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
