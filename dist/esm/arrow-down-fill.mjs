export const name="arrow-down-fill";
export const id="dl_cf68de2e45614fdda4ba";
export const url=new URL("../icons/arrow-down-fill.svg?v=e01cabbc9d683e45fbfd8bde2403a213df64e3d4a3893e806b5e14656bad9767",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
