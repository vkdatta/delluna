export const name="tray-arrow-up-light";
export const id="dl_6c3bae08fae64e5aac5b";
export const url=new URL("../icons/T/tray-arrow-up-light.svg?v=c1819a44248bf8a1314dc299d4132d4463e8bc156acb6d0cf0ce99084a0f7baa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
