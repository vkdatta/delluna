export const name="boat_bus";
export const id="dl_8132b2fcf91d432a8ff9";
export const url=new URL("../icons/boat_bus.svg?v=7ab40fa764c2c74c9e2dda364d10821f763655a22f41765c9364b84dd88a2a62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
