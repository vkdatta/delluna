export const name="point_of_sale-fill";
export const id="dl_0c5f0a49631e445db7cf";
export const url=new URL("../icons/point_of_sale-fill.svg?v=31d80ac1b937bb64ca29db60fd00289523d8d790d6c94cbd3343387849b4b260",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
