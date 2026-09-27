export const name="beer_meal-fill";
export const id="dl_ea2b9d8d7d3fe04fa14e";
export const url=new URL("../icons/beer_meal-fill.svg?v=7253a147ac1e3047cabba1e16c31f8b4da38c7ffc995ea42b462336b9c2771a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
