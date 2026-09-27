export const name="van-duotone";
export const id="dl_dba761f0837ce0cb1941";
export const url=new URL("../icons/van-duotone.svg?v=33fb32a3e7c2196c8e79792727f845f9f60e501b41b3ce751256f022fbef7d33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
