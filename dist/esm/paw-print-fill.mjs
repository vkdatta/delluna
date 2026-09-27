export const name="paw-print-fill";
export const id="dl_be5de06b0cf949a2b5c0";
export const url=new URL("../icons/paw-print-fill.svg?v=311acb1d8816f27d377e580eb327fdbac9d6bf5957f72316373ce689a9357093",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
