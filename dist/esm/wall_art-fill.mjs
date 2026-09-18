export const name="wall_art-fill";
export const id="dl_a4036d1a1f1249e19336";
export const url=new URL("../icons/wall_art-fill.svg?v=8f9f57156e68fb498a91c3a271d993bec8b259fc2feb1553450963ee89eec900",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
