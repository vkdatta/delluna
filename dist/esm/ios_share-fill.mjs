export const name="ios_share-fill";
export const id="dl_a69a899ee35c4bc82b61";
export const url=new URL("../icons/ios_share-fill.svg?v=876072bf0a1f550b200751047807ce0125eb8ada588c682a8f9600a9e2ad26c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
