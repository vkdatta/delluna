export const name="mouse-left-click-fill";
export const id="dl_515cc5c90ef44845aae5";
export const url=new URL("../icons/mouse-left-click-fill.svg?v=9624cb94a6e008e2816de9a30924da7d2af0079426d79a1455029dea1dca48ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
