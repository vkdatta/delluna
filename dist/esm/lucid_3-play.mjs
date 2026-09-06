export const name="lucid_3-play";
export const id="dl_57d57262702f4aa799ec";
export const url=new URL("../icons/lucid_3-play.svg?v=1bc5c3ed6c2b2ce408237626f3416a5931cee752fde7b0bd8ffd5ad6d6617603",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
