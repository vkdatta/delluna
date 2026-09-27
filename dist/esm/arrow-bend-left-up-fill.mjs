export const name="arrow-bend-left-up-fill";
export const id="dl_14c6a4eaaaf24d6ca411";
export const url=new URL("../icons/arrow-bend-left-up-fill.svg?v=f0e048010e4ff69638b1d023be91deeb7037b17f8db2f71cd9734d68efc93ca2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
