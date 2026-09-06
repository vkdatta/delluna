export const name="grid-nine";
export const id="dl_7305cbf17d1a40f28e11";
export const url=new URL("../icons/grid-nine.svg?v=681e079d321141f657f9461428fe54bc864d2452837b4122827e344d065d6e8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
