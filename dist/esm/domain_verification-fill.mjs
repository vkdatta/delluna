export const name="domain_verification-fill";
export const id="dl_0b7f3de95ceaadb10ea1";
export const url=new URL("../icons/domain_verification-fill.svg?v=78adca3c8c67c025381d401e4e0efa6dba1492a5a10860201ff1ba87261861e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
