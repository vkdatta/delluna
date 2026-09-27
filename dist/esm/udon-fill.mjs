export const name="udon-fill";
export const id="dl_dec092284adb78d77ee4";
export const url=new URL("../icons/udon-fill.svg?v=fe1a0390cc717884363a68ffb099aa1bb29686f57a543b1b8ccc9be1df979e02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
