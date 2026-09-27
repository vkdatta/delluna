export const name="line_end_arrow-fill";
export const id="dl_70989bbe141a1394a468";
export const url=new URL("../icons/line_end_arrow-fill.svg?v=da2c8ac57efd1d8763b7be3e423f64d0f1887294a3499631f4e50f39b31a7e03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
