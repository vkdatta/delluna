export const name="sort-descending-light";
export const id="dl_6188fe454a494b25922b";
export const url=new URL("../icons/S/sort-descending-light.svg?v=d60bda29812762925578914f83a51a5d88070784c4ba59827083c5e4d16f06f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
