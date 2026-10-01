export const name="point_scan-fill";
export const id="dl_7b2e1131ba7723103d61";
export const url=new URL("../icons/point_scan-fill.svg?v=b6ed36dd16470f0ffdbbe5586a64ff547729368c8f5a16823a134401d390ada0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
