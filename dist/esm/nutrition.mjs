export const name="nutrition";
export const id="dl_cf207a8d56c065cf91d3";
export const url=new URL("../icons/nutrition.svg?v=425a8f00eec9f543fac1f268f2a5242a93141b1930cf9b57f878c94128cd8f3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
