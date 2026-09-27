export const name="filter_8-fill";
export const id="dl_ea8ea3d9804550caad82";
export const url=new URL("../icons/filter_8-fill.svg?v=7a5ddb16edbfa7896e61c51ab699fcbb90498535319d3615f8a456ba085d7e56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
