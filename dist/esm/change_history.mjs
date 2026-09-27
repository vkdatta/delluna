export const name="change_history";
export const id="dl_3e8120f2a2a9b5941f5e";
export const url=new URL("../icons/change_history.svg?v=246223e5cd69fa12e56183b4a36a0ebd0fc0583c7ff2a6887f52649c7ff05e2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
