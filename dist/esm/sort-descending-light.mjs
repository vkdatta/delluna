export const name="sort-descending-light";
export const id="dl_486717e25de376962746";
export const url=new URL("../icons/sort-descending-light.svg?v=9aadb0f61cf05db030b82e35e11a30582695c288ecde4400f9270585b9785f0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
