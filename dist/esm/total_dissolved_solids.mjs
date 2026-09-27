export const name="total_dissolved_solids";
export const id="dl_39a91fa3bae516130fcc";
export const url=new URL("../icons/total_dissolved_solids.svg?v=02d619043da449f1f0ff4e684f4f1173cf91116fa3c227256b5512d6cb354c72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
