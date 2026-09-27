export const name="format_clear";
export const id="dl_58d8caccc4c41c1c46db";
export const url=new URL("../icons/format_clear.svg?v=0234b354091751a5d301d0d66e3f8d7e62cd16f4405f40f5db13da7b3bd896bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
