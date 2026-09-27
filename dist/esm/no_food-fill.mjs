export const name="no_food-fill";
export const id="dl_bd4716d3f8188f54f2cd";
export const url=new URL("../icons/no_food-fill.svg?v=a9d2e192f0fed5cd6a3fd2287fb153271b1d4618811e0f9806557f13bd61a915",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
