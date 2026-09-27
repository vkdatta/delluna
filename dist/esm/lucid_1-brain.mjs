export const name="lucid_1-brain";
export const id="dl_a0eede7531f34e8a8ad9";
export const url=new URL("../icons/lucid_1-brain.svg?v=5fb6ddbff893df86504ac16cc6388251de72be9e40bff6dd8e6048a163949cf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
