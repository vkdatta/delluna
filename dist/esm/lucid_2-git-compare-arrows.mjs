export const name="lucid_2-git-compare-arrows";
export const id="dl_3ce9c436200349f3a8f7";
export const url=new URL("../icons/lucid_2-git-compare-arrows.svg?v=42c70ec418d4f37b31146f8c93e3666073a41832de8ea4f660eda7d40978d2ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
