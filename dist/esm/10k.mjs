export const name="10k";
export const id="dl_c6ad2041f8230bd57d36";
export const url=new URL("../icons/10k.svg?v=62bffb8cff6f11e7b847cf6f96b8573bdfe473378ab7d9934ce69ac819e40b47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
