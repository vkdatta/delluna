export const name="lock_open";
export const id="dl_5bb5a25be93d1707f703";
export const url=new URL("../icons/lock_open.svg?v=2c1317d5ac66e25c2840f15a1c5ff1e7749f81cd2e2b98250d0c89943711bb3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
