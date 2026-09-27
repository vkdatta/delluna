export const name="lucid_3-shield-cog-corner";
export const id="dl_a18e676464e24cab8da6";
export const url=new URL("../icons/lucid_3-shield-cog-corner.svg?v=69b1867632ecd5314826a41b9185c01f9f10e85fc82f721c51f816f3e67debef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
