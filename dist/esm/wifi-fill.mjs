export const name="wifi-fill";
export const id="dl_351ae2efc5e9092523b0";
export const url=new URL("../icons/wifi-fill.svg?v=2b8bd08974cdcd905c4f5ce70af893f072a5fab4025d8bb3361e56ed4399ba07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
