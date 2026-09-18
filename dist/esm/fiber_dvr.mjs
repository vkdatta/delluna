export const name="fiber_dvr";
export const id="dl_b209a424fb984bffaf37";
export const url=new URL("../icons/fiber_dvr.svg?v=daee5e3a28c7ad7b8935169c1a26da3e46c93234f01fbf6d92352f3ee695ca69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
