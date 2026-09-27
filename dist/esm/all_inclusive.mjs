export const name="all_inclusive";
export const id="dl_d84790e687aa84809b97";
export const url=new URL("../icons/all_inclusive.svg?v=35210f0403aff5e5877a4165ac08da1460f1dc4b97454777364292f13f126c18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
