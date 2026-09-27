export const name="user-square-fill";
export const id="dl_a3399a06f15eae2a5233";
export const url=new URL("../icons/user-square-fill.svg?v=0b5b9f7b012f6e3b1ff2b3759d35830ab5ce62438d1b82cc7c0d6869a7fc195b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
