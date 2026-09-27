export const name="brand_awareness-fill";
export const id="dl_2b745beb73167e453050";
export const url=new URL("../icons/brand_awareness-fill.svg?v=73746ed4a3fd0059f8358f95305d0dbc79e711f8abcc5c3f10169787aee590d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
