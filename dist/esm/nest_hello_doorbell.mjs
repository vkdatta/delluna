export const name="nest_hello_doorbell";
export const id="dl_973e5debe47cd7302b73";
export const url=new URL("../icons/nest_hello_doorbell.svg?v=1cbaf5e898fd61cb8c333bc23ce7b83d140cbcfbf7500d39cfc4dc9a68d104fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
