export const name="nightlife";
export const id="dl_a41b9f758b586f9f9a97";
export const url=new URL("../icons/nightlife.svg?v=33a521a4abd28d1e67b6510c9ec70086627f7e395de2f23c2a7cf193a201dcea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
