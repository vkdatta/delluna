export const name="point_of_sale-fill";
export const id="dl_df8e5b0b7f426bfed5ab";
export const url=new URL("../icons/point_of_sale-fill.svg?v=0d6b762483f54d30401118e72fd86d5af67a39f715099f56095b03b138049070",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
