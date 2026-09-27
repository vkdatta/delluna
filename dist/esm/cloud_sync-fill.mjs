export const name="cloud_sync-fill";
export const id="dl_628cdfb9c96ea534589d";
export const url=new URL("../icons/cloud_sync-fill.svg?v=ba497a7f86f173383d9428c8a7d3bfb8c2029965520b1d010d10e229c5cce31b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
