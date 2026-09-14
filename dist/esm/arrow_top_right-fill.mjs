export const name="arrow_top_right-fill";
export const id="dl_d1a03ddf07a944448f04";
export const url=new URL("../icons/A/arrow_top_right-fill.svg?v=f15d3d885f0e6778860322118b755abbd3b632ff41da5f6fba8ebd5d16fb5e37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
