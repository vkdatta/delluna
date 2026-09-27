export const name="x-logo-duotone";
export const id="dl_2e338f64fc85aff75a8a";
export const url=new URL("../icons/x-logo-duotone.svg?v=6488a1db2c6f916d786b8be48228737cf08b4575daa5628632fcf7272c6fbabb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
