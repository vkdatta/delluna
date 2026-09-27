export const name="domain";
export const id="dl_d602dbefb3f032ec0310";
export const url=new URL("../icons/domain.svg?v=5bc98a2bc9d659682a0c28d2f958a8a28ea0c51101959a7f05b3c169f02ef485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
