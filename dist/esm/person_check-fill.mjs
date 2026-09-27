export const name="person_check-fill";
export const id="dl_1434bef5f3a691138aad";
export const url=new URL("../icons/person_check-fill.svg?v=e888daa10e6873cc7dbd6b362806750bafec809fd17c5adb3df8d653143e4b2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
