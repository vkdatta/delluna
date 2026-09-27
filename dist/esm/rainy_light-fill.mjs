export const name="rainy_light-fill";
export const id="dl_52bc7a38388832df0482";
export const url=new URL("../icons/rainy_light-fill.svg?v=eb0b25c1b316f5812d5e75ef4c6f7f973164a1b2088ad0f493294ad04252f852",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
