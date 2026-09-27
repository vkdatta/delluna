export const name="lucid_3-slice";
export const id="dl_709b9b0f33c740089ef8";
export const url=new URL("../icons/lucid_3-slice.svg?v=6eedd2c7c124c934e0c7ba281cf36c4df8682c3548b56ff3f06dd43b78f17d68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
