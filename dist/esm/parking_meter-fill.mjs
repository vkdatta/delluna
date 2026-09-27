export const name="parking_meter-fill";
export const id="dl_0585c452bdcbc51bf7f5";
export const url=new URL("../icons/parking_meter-fill.svg?v=2a048f9c12a908d80849d5fb398c9e7a2eaac2a0be96043abc77341f19cf321d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
