export const name="block-fill";
export const id="dl_ea17c5fe0f2028aa99c7";
export const url=new URL("../icons/block-fill.svg?v=ad37e17d7c51e13dc522490317b19bfd8397433c835b638153960eed131dbde3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
