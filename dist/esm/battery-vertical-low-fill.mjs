export const name="battery-vertical-low-fill";
export const id="dl_ccad6722049d42b7a3ba";
export const url=new URL("../icons/battery-vertical-low-fill.svg?v=b47f418a73796493f3c686a24673e080f335ff8227d459646c611a0d37d6f5f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
