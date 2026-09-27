export const name="door_front-fill";
export const id="dl_b9a2f8a12b268a1a5c6a";
export const url=new URL("../icons/door_front-fill.svg?v=bca559fdb0364eeaba8c941fee1609df7f5f2c00b10dc0622a5251966e9d158c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
