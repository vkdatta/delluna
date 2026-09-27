export const name="point_scan-fill";
export const id="dl_f55029ab96902a4dc931";
export const url=new URL("../icons/point_scan-fill.svg?v=719fe07054edbbc5b75dd55acbee8c99df6493757f8c9a9bbd6a7fc26830f51d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
