export const name="clock_loader_60-fill";
export const id="dl_1f4dc2cbe79e676d5adf";
export const url=new URL("../icons/clock_loader_60-fill.svg?v=fb876cf349e5585d12eca1e3032ce7ee7f6522b9f505ea4c4e96d3cab51a1385",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
