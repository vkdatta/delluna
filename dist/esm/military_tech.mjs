export const name="military_tech";
export const id="dl_e70c9f5391b4e2a2d439";
export const url=new URL("../icons/military_tech.svg?v=b62cb29fa37f15fde15fdead7a55f713a87a2c947699af2e0678ec4fa8eaa1f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
