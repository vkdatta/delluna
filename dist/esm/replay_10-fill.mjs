export const name="replay_10-fill";
export const id="dl_83c0c78f432048e6e316";
export const url=new URL("../icons/replay_10-fill.svg?v=2ff79a0884ded7cc142b455758d27af6ab50f02964e9fc9084db54983597ba72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
