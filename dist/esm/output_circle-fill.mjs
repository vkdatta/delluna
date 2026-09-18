export const name="output_circle-fill";
export const id="dl_fde9e21b91f544988689";
export const url=new URL("../icons/output_circle-fill.svg?v=14ad1d34d0e338700e16896e1db468b386e47fadd0696106d136094e2f8ef0fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
