export const name="user-circle-duotone";
export const id="dl_5c41c06d838cb1520b31";
export const url=new URL("../icons/user-circle-duotone.svg?v=8cc1bfd011b1271418a13c923ef9cffaff225f084a721fd414555d697960618c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
