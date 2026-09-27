export const name="phosphor-logo-duotone";
export const id="dl_5f375ec690ba4ce9a9c6";
export const url=new URL("../icons/phosphor-logo-duotone.svg?v=b999f80675219ab9b40e781134b2b090a5f487dfef2fe587b92db5f20abc417e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
