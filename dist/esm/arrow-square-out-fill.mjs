export const name="arrow-square-out-fill";
export const id="dl_ce9858d3ea0841eca1c1";
export const url=new URL("../icons/arrow-square-out-fill.svg?v=27477119112ca3250f085464c5bd456d2d9f83de79b80cb5067c786696ab8f7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
