export const name="2mp-fill";
export const id="dl_75fbb15bb00b132b2d74";
export const url=new URL("../icons/2mp-fill.svg?v=f3efa14cb3b9cf5722cceb2976ce6bd333c604d3ae4808b9122e7d600451a5fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
