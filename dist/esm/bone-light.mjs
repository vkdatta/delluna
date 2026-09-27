export const name="bone-light";
export const id="dl_4b6bffc8699f49d4bd5e";
export const url=new URL("../icons/bone-light.svg?v=58069e056979cf70a64365371d69f436aa220119097c2b20b292f4fc08fdae89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
