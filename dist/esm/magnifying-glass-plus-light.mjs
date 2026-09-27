export const name="magnifying-glass-plus-light";
export const id="dl_b3f9490542614b7b8702";
export const url=new URL("../icons/magnifying-glass-plus-light.svg?v=b0224d48c650a3ca9f303ba23efef2aff8f08f96f1a962e7343bc175f3bfd404",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
