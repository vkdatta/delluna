export const name="priority_high";
export const id="dl_bca842e5f1b1b19109d1";
export const url=new URL("../icons/priority_high.svg?v=da3a8956e171839e1fcad19eb4d08f2ed810383966616f87f1472aaa1cae90e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
