export const name="storefront-light";
export const id="dl_92db104006476001712f";
export const url=new URL("../icons/storefront-light.svg?v=664a10405c3d38c57c09a90d4e0c68af65522bfb7d601dd4a8c5c160cb91c0a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
