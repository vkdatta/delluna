export const name="cheese-duotone";
export const id="dl_a411837c83124b11b3ba";
export const url=new URL("../icons/cheese-duotone.svg?v=8af4cef420a37493d7ae96e0883f88158a909d02903279db125f43685f173857",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
