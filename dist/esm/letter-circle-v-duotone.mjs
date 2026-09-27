export const name="letter-circle-v-duotone";
export const id="dl_8f47a853395b4b3db45d";
export const url=new URL("../icons/letter-circle-v-duotone.svg?v=a3e545205e81b2418386200ee966c1d66afb642786c473ac1a1faa29d0aeca44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
