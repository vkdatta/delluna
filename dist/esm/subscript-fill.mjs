export const name="subscript-fill";
export const id="dl_29641e619dc8ee35a33c";
export const url=new URL("../icons/subscript-fill.svg?v=4d3fa9877c39e22254fe35a53eeeded8b33219f2d68aaff545b36c2c2fea9ce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
