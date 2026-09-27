export const name="diversity_2";
export const id="dl_1ef62c158e0a422d5166";
export const url=new URL("../icons/diversity_2.svg?v=e234b786b3b4f0b6a247526de0ee53397d29cca336bf5a19a0f4289734b4df92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
