export const name="chart-pie-slice";
export const id="dl_81d152f5783d4e36b5c0";
export const url=new URL("../icons/chart-pie-slice.svg?v=3376dec2d07a979b6fb4d2778477ebeec072feca37ba3a954ce5cd9d31ab937c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
