export const name="stat_0-fill";
export const id="dl_0c40a35a9f0b87c98df4";
export const url=new URL("../icons/stat_0-fill.svg?v=9943ccef0998261daa4e98df47e4a5fc385bcd10faa6ec8d37af427565e6cf7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
