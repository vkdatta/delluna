export const name="unpaved_road-fill";
export const id="dl_c43d2d161e302c154541";
export const url=new URL("../icons/unpaved_road-fill.svg?v=f3b2d8e0adf75dabac755ff93955ad344353e60006139f910fa6431029620788",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
