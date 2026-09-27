export const name="wb_twilight-fill";
export const id="dl_56408ecc6d2582ea37d2";
export const url=new URL("../icons/wb_twilight-fill.svg?v=7bd97343415ba135abe60d8b2ed6463b4014e6fb1079568a837d8f42cbc51d3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
