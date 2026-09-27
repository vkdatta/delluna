export const name="charging-station-fill";
export const id="dl_131a921fe6274ef581b0";
export const url=new URL("../icons/charging-station-fill.svg?v=f1543d8a960352b9b1a1cb2417f2d3baad978cc084bb2827076b163431020eee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
