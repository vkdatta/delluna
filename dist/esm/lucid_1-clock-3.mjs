export const name="lucid_1-clock-3";
export const id="dl_12e53706dba0446c9940";
export const url=new URL("../icons/lucid_1-clock-3.svg?v=b024e556408cbf40a75576acf5fcb03bfd871da27cbaa77b27e9e094015dbb03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
