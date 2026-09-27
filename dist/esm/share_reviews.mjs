export const name="share_reviews";
export const id="dl_efbc8a40e5e103f6b213";
export const url=new URL("../icons/share_reviews.svg?v=60f7d788a91d897021810756e47d90a2cfd467886b0935c9be8d039cf05b79c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
