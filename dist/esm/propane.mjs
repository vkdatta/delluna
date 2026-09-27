export const name="propane";
export const id="dl_2e404fe2a3abe83f9e22";
export const url=new URL("../icons/propane.svg?v=080b2068888966125e9a61b2891a3b9f182aa1117c641abd35c8ff5168678185",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
